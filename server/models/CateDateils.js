const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{type:String},
    dateilsname:[{type:mongoose.SchemaTypes.ObjectId,ref:'Categories'}],
    scores:{},
    skills:[{
        icon:{type:String},
        title:{type:String},
        price:{type:String},
    }]
})

module.exports = mongoose.model('CateDateils',schema)