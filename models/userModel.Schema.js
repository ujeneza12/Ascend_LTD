const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
     email:{
          type:String,
          min:4,
     },
     phoneNumber:{
          type:Number,
          min:9,
     },
     password:{
          type:String,
          min:6,
          max:40
     }
});

module.exports=mongoose.model("ascend_users",userSchema);