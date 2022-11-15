const userSchema=require('../models/userModel.Schema')
const bcrypt=require('bcrypt');
exports.createUser=async (req,res)=>{
     try{
          // const hashedPassword=bcrypt.hash(req.body.password,10);
          const newUser=await new userSchema({
               email:req.body.email,
               phoneNumber:req.body.phoneNumber,
               password:req.body.password          
          })

          const saveUser=newUser.save();
          if(saveUser){
               res.status(200).send(newUser);
          }
          else{
               res.status(200).send("Unable to create the user");
          }
     }
     catch(error){
          console.log(error);
     }
}

