import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
// app.use(bodyParser)
app.get('/users',(req,res)=>{
    console.log("this is working");
    res.send("hello,i came from backend");
})

app.put('/edit-user',(req,res)=>{
    let mydata=req.body;
    console.log(mydata);
    res.end("data edited")
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data added");
}
)
app.delete('/delete-user',(req,res)=>{
    res.send("deleted");
})
app.listen(7007,()=>{
    console.log("server running at port 7007")
});





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