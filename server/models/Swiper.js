const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    url:{type:String},
    // 轮播图跳转的url 还没写
    jump:{type:String}
})

module.exports = mongoose.model('Swiper',schema)