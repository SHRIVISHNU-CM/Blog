const mongoose = require('mongoose')

const {Schema} = mongoose

const userOne = new Schema({
    name:{
        type:String
    },
    notes:[{
        type:"ObjectId",
        ref:"userTwo"
    }]
})

module.exports = mongoose.model('userOne',userOne)