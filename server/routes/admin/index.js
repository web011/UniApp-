const AdminUser = require('../../models/AdminUser');

module.exports = app =>{
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams: true
    })

    router.post('/',async (req,res)=>{
        const model =  await req.model.create(req.body);
        res.send(model)
    })
    router.get('/',async (req,res)=>{
        let queryOptions = {}
        if(req.model.modelName === 'Categories') {
            queryOptions.populate = 'parent'
        }
        const items = await req.model.find().setOptions(queryOptions);
        res.send(items)
    })
    router.get('/:id',async (req,res)=>{
        const model = await req.model.findById(req.params.id);
        res.send(model)
    })

    const authMiddleware = require('../../middleware/auth');
    const resourceMiddleware = require('../../middleware/resource')

    router.put('/:id',async (req,res)=>{
        const model = await req.model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.delete('/:id',async (req,res)=>{
        await req.model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true   
        })
    })
    app.use('/admin/rest/:resource',authMiddleware(),resourceMiddleware(),async (req,res,next) => {
        const token = String(req.headers.authorization || '').split(' ').pop();
        console.log(token)
        assert(token,401,'请先登陆')
        // assert(token,401,'请先提供jwt token')
        const {id} = jwt.verify(token,app.get('secret'))
        assert(id,401,'请先登陆')
        // assert(id,401,'无效的jwt token')
        req.user = await AdminUser.findById(id);
        assert(req.user,401,'请先登陆')
        await next()
    },router)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../../uploads'})
    app.post('/admin/upload', upload.single('file') ,async (req,res)=>{
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })


    app.post('/admin/login',async (req,res)=>{
        const { username, password } = req.body;
        // 1.根据用户名找用户
        const user = await AdminUser.findOne({username}).select('+password')
        // 判断user不不存在就抛出422状态码响应用户不存在
        assert(user,422,{message:'用户不存在'})
        // if (!user){
        //     res.send({message:'用户名不存在'})
        //     // return res.status(422).send({
        //     //     message:'用户名不存在'
        //     // })
        // }
        // 2.效验密码
        const isValid = require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,{message:'密码错误'})
        // if (!isValid) {
        //     res.send({message:'密码错误'})
        //     // return res.status(422).send({
        //     //     message:'密码错误'
        //     // })
        // }
        // 3.返回token
        const imgs = user.userimg;
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send({token,username,imgs})
    })

    // 错误处理函数
    app.use(async (err,req,res,next) => {
        // console.log(err)
        res.status(err.statusCode || 500).send({
            message:err.message
        })
    })
}