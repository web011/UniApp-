module.exports = app => {
    const router = require('express').Router();
    const mongoose = require('mongoose')
    const Homedateils = mongoose.model('HomeDateils')
    router.get('/swiper',async (req,res) => {
        const Swiper = mongoose.model('Swiper')
        const swipers = await Swiper.find();
        res.send(swipers)
    })
    router.get('/homedateils' ,async (req,res) => {
        const homedateils = await Homedateils.find();
        res.send(homedateils)
    })
    router.get('/dateils/:id', async (req,res) => {
        const dateils = await Homedateils.findById(req.params.id);
        res.send(dateils)
    })
    app.use('/web',router)
}