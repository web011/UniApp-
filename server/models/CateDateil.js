const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    dateilsname:[{type:mongoose.SchemaTypes.ObjectId,ref:'Categories'}],
    scores:{},
    skills:[{
        dateilsswiper:{},
        dateilsswipercount:{type:Number},
        dateilsiconcount:{type:Number},
        dateilsicon:{},
        showimg:{type:String},
        title:{type:String},
        price:{type:String},
        count:{type:Number}
    }]
})

module.exports = mongoose.model('CateDateils',schema)