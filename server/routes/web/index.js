module.exports = app => {
    const router = require('express').Router({
        mergeParams: true
    });
    const mongoose = require('mongoose')
    const Homedateils = mongoose.model('HomeDateils');
    const CateDateils = mongoose.model('CateDateils');
    // const assert = require('http-assert')
    const WebUser = mongoose.model('WebUser');
    // 获取轮播图
    router.get('/swiper',async (req,res) => {
        const Swiper = mongoose.model('Swiper')
        const swipers = await Swiper.find();
        res.send(swipers)
    })
    // 获取首页热销商品
    router.get('/homedateils' ,async (req,res) => {
        const homedateils = await Homedateils.find();
        res.send(homedateils)
    })
    // 把id传给商品详情页面然后通过id查找商品
    router.get('/dateils/:id', async (req,res) => {
        const dateils = await Homedateils.findById(req.params.id);
        // 获取首页热销商品
        if(dateils !== null){
            res.send(dateils)
        }else{
            // 获取分类商品
            const cate = await CateDateils.find();
            for(var s of cate){
                for(var a of s.skills){
                    if(a._id == req.params.id){
                        res.send(a)
                    }
                }
            }
        }
    })
    // 获取分类的商品
    router.get('/cate',async (req,res) => {
        const cate = await CateDateils.find();
        res.send(cate)
    })
    //  登陆验证
    router.post('/login',async (req,res) => {
        const {userQQ,password} = req.body;
        // 根据用户名找用户
        const user = await WebUser.findOne({userQQ}).select('+password');
        if(!user) {
            return res.status(422).send({
                message:'用户不存在'
            })
        }
        // 验证密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        if(!isValid){
            return  res.status(422).send({
                message:'密码错误'
            })
        }
        // 返回token
        const jwt = require('jsonwebtoken');
        const userimg = user.userimg;
        const username = user.username;
        const _id = user._id
        const token = jwt.sign({id:user.id},app.get('secret'))
        res.send({token,username,userimg,_id,userQQ})
    })
    // 获取用户信息
    router.get('/login/:id',async (req,res) => {
        const model = await WebUser.findById(req.params.id);
        res.send(model)
    })
    // 找到当前用户并且修改数据
    router.put('/login/:id',async (req,res)=>{
        await WebUser.updateOne({"_id":req.params.id},req.body);
        res.send({
            message:'修改成功'
        })
    })
    router.delete('/login/:userid/:dateilsid',async (req,res) => {
        // 商品id
        const user = await WebUser.findById(req.params.userid);
        var i = 0;
        for(var s of user.collections){
            if(s._id == req.params.dateilsid){
                user.collections.splice(i,1);
                res.send({
                    message:'删除成功'
                })
                i++;
                break;
            }else{
                res.send({
                    message:'收藏没有这个商品'
                })
                break;
            }
        }
        await WebUser.updateOne({"_id":req.params.userid},user);
    })
    // 删除购物车
    router.delete('/cart/:userid/:dateilsid',async (req,res) => {
        // 商品id
        const user = await WebUser.findById(req.params.userid);
        var i = 0;
        for(var s of user.cart){
            if(s._id == req.params.dateilsid){
                user.cart.splice(i,1);
                break;
            }
            i++;
        }
        res.send(user)
        await WebUser.updateOne({"_id":req.params.userid},user);
    })
    app.use('/web',router)
}