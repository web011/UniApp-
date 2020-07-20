module.exports = app => {
    const router = require('express').Router();
    const mongoose = require('mongoose')
    const Homedateils = mongoose.model('HomeDateils')
    const CateDateils = mongoose.model('CateDateils');
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
    //  获取用户信息
    router.get('/login',async (req,res) => {
        const logins = mongoose.model('WebUser');
        const login = await logins.find();
        res.send(login)
    })
    app.use('/web',router)
}