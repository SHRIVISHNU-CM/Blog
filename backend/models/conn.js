const mongoose = require('mongoose')

const db = ()=>{
    mongoose.connect(process.env.CONNECT)
    .then(()=>console.log("Connected"))
    .catch((e)=>console.log(e.message))
}

module.exports = db