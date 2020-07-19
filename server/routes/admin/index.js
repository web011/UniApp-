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
    var auth = require('../../middleware/auth');
    var resource = require('../../middleware/resource')
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
    app.use('/admin/rest/:resource',auth(),resource(),router)

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
        // 2.效验密码
        const isValid = require('bcrypt').compareSync(password,user.password);
        assert(user,422,{message:'密码错误'})
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