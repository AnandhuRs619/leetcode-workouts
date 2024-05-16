var fs = require("fs");

const { error } = require("console");


// callback example 

// function fatchData1(callback ){
//     console.log("running...")
//     setTimeout(()=>{
//         const data = "test for callback ";
//         callback(data);
//     },3000)
// }
// fatchData1((data) => {
//     console.log(data);
// });

// promise 
// function fatchData (){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             const data = "data successfully fetched"
//             res(data);
//         },2000)
//     })
// };
// fatchData().then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })



// fs module 

// fs.writeFileSync("mytext.txt","hai this is my file and new things are added");

// fs.unlink("mytext.txt",(err)=>{
// if(!err){
//     console.log("deleted")
// }
// })

// fs.readFile('mytext.txt','utf-8',(err,data)=>{
//     if(!err){
//         console.log("readed data" , data);
//         fs.writeFile("newText.txt",data + " "+"secondry data is created ",(err,data)=>{
//             if(!err){
//                 console.log("file created ")
//             }
//         })
//     }
// })

// const http = require("http");

// http.createServer((req,res)=>{
//     res.write("hello guyzz..")

//     res.end();
// }).listen(3000);