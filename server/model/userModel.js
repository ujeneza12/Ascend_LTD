const mongoose = require('mongoose')
const  userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        max:60,
    },
    password:{
        type:String,
       require:true,
       min:8,
       max:20,
    }
})
module.exports = mongoose.model("users",userSchema);