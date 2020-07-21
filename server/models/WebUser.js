const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    userQQ:{type:Number},
    password:{type:String,
        select:false,
        set:function(val){
        return require('bcrypt').hashSync(val,10)
    }},
    // 性别
    sex:{type:String},
    // 地址
    address:{type:String},
    // 出生
    born:{type:String},
    userimg:{type:String},
    collections:[{
        imgurl:{type:String},
        title:{type:String},
        price:{type:String},
        data:{type:String},
    }],
    cart:[{
        checkbox:{type:Boolean},
        imgurl:{type:String},
        title:{type:String},
        price:{type:String},
        count:{type:Number},
        box:{type:Boolean}
    }]
})

module.exports = mongoose.model('WebUser',schema)