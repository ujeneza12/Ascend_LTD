const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const dbConnection=()=>{
     mongoose.connect(process.env.DB_URL,()=>{
          console.log("Database connection established........");
     })
}

module.exports=dbConnection;
