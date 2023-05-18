const express = require('express');
const app = express(); 
const cors = require('cors');
app.use(express.static("public/upload"));


app.use(cors())
//config
const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'});

const db  = require('./db/dataBase');

const Port  = process.env.PORT;


const userRouter = require('./router/userRoute');
const categoryRouter = require('./router/categoryController');
const blogRouter = require('./router/blogRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//use Routes
app.use('/v1',userRouter)

//Category Routes
app.use('/v1',categoryRouter)

//Blog Routes
app.use('/v1',blogRouter);


app.listen(Port,()=>{
    console.log("Server is Running Fine ");
})