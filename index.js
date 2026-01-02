// import express from 'express';
// // import bodyParser from 'body-parser';

// const app = express();
// app.use(express.json());
// app.use('/',studentsRouter);
// // app.use(bodyParser)
// app.get('/users',(req,res)=>{
//     console.log("this is working");
//     res.send("hello,i came from backend");
// })

// app.put('/edit-user',(req,res)=>{
//     let mydata=req.body;
//     console.log(mydata);
//     res.end("data edited")
// })
// app.post('/add-user',(req,res)=>{
//     let data=req.body;
//     console.log(data);
//     res.send("data added");
// }
// )
// app.delete('/delete-user',(req,res)=>{
//     res.send("deleted");
// })
// app.listen(7007,()=>{
//     console.log("server running at port 7007")
// });





// http server creation:

// import http from 'http';
// const server = http.createServer((req,res)=>{
//     if(req.url === "/users"){
//          res.writeHead(200,{"Content-Type":"application/json"});
//     res.end(JSON.stringify({name:"thub"}));
// }
//     else{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("hello, i came from backend");
//     }
// });
// server.listen(7007,()=>{
//     console.log(`server running at port ${7007}`)
// });




import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routers/studentsRouters.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://kavyapalepu173_db_user:Kavya%402005@mysample.3dic6gj.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})
app.put('/put-students/:id',(req,res)=>{
    res.send("hello this backend")
})
app.put('/put-studentstatus',(req,res)=>{
    res.send("hello this backend")
})
app.listen(7007, () => {
    console.log("server running at port 7007")
});