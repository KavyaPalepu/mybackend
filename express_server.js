import express from 'express';
import studentRoutes from './Routers/studentRoutes.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use('/',studentRoutes);
app.get('/users',(req,res)=>{
    res.send("This is also backend");
})
app.get('/get-users',(req,res)=>{
    res.send("hello this backend")
})
app.listen(7008,()=>{
    console.log("This is express world");
})