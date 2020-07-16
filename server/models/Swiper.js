const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    url:{type:String}
})

module.exports = mongoose.model('Swiper',schema)