const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const dbConnection=require('./config/dbConnection');
const router=require('./routes/userRoutes');

const swaggerUi=require('swagger-ui-express');
const swaggerDocument=require('./swagger.json');



dbConnection();

app.listen(process.env.PORT|| 3000,()=>{
     console.log("Port is on...........");
})

app.get('/',(req,res)=>{
     res.status(200).send("Welcome on Ascend");
});



app.use(express.json());
app.use('/user',router);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
