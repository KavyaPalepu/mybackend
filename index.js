import express from 'express';

const app = express();

app.get('/users',(req,res)=>{
    res.send("hello,i came from backend");
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