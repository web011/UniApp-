const Swiper = require('../../models/Swiper')

module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Swiper = require('../../models/Swiper');
    const Categories = require('../../models/Categories');
    router.post('/Categories',async (req,res)=>{
        const model =  await Categories.create(req.body);
        res.send(model)
    })
    router.get('/Categories',async (req,res)=>{
        const items = await Categories.find().populate('parent');
        res.send(items)
    })
    router.get('/Categories/:id',async (req,res)=>{
        const model = await Categories.findById(req.params.id);
        res.send(model)
    })
    router.put('/Categories/:id',async (req,res)=>{
        const model = await Categories.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    router.delete('/Categories/:id',async (req,res)=>{
        await Categories.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true   
        })
    })
    app.use('/admin',router)
}