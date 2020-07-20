const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String,
        select:true,
        set:function(val){
        return require('bcrypt').hashSync(val,10)
    }},
    userimg:{type:String},
    collections:[{
        comimg:{type:String},
        title:{type:String},
        price:{type:String},
        data:{type:String},
    }],
    cart:[{
        checkbox:{type:Boolean},
        comimg:{type:String},
        title:{type:String},
        price:{type:String},
        count:{type:Number}
    }]
})

module.exports = mongoose.model('WebUser',schema)