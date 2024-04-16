const mongoose = require('mongoose')

const {Schema} = mongoose

const usertwo = Schema({
    sub:{type:String},
    head:{
        type:"String"
    },
    author:{
        type:mongoose.Schema.Types.ObjectId , ref:"userone"
    }
})

module.exports = mongoose.model('userTwo', usertwo)