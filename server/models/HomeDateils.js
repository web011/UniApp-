const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    url:{type:String},
    title:{type:String},
    price:{type:String},
    DateilsUrl:[{type:String}],
    dateils:[{type:String}],
    comment:[{type:String}]
})

module.exports = mongoose.model('HomeDateils',schema)