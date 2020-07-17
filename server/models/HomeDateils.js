const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    imgurl:{type:String},
    title:{type:String},
    price:{type:String},
    // 一下四个目前没有数据
    // 商品里面的轮播图
    commodityswiper:{},
    // 商品详情
    dateils:{},
    // 用户评论
    usercomment:{type:String},
    // 用户评论图片
    commenturl:{type:String}
})

module.exports = mongoose.model('HomeDateils',schema)