// const user = {
//     name: "Sokleap",
//     age: 21,
//     university: "Royal University of Phnom Penh",
// }
// const {name,age,university} = user;

// console.log(`Hello! I'm ${name}. I'm ${age} years old. I'm a computer science student at ${university}.`);

// =============================Spread and Rest Operator===================================

// const myNum = [1,2,3];
// const addedNum = [...myNum,4,5];
// // addedNum = [1, 2, 3, 4, 5]


// function sum(...number){
//     // ...number = 1 2 3 4 5
//     return number.reduce((a,b)=>a+b,0);
//     // it's mean :
//     // 1. a=0, b=1 => 0+1=1
//     // 2. a=1, b=2 => 1+2=3
//     // 3. a=3, b=3 => 3+3=6
//     // 4. a=6, b=4 => 6+4=10
//     // 5. a=10, b=5 => 10+5=15
// }

// // console.log(sum(...addedNum));
// console.log(addedNum);

// ============================Module====================================
// ============================CommonJs====================================

// const {bok,dok} = require('./math');

// console.log(bok(5,4));
// console.log(dok(5,4));

// ============================Es Module====================================

// import {bok,dok} from './math.js';

// console.log(bok(5,4));
// console.log(dok(5,4));

// ============================FS Module====================================
// FS = FileStream use for read content of file

// import fs from 'fs';

// const data = fs.readFileSync('./example.txt','utf8');

// console.log(data);

// ============================FS Module====================================
// Write data to file
// import fs from 'fs';

// const data = "Rean Node min jes teh";

// try {
//     fs.writeFileSync("./example.txt", data);
//     console.log("Write successful!");
// } catch (error) {
//     console.log(error);
// }

// ============================FS Module====================================

// import fs from 'fs';

// const data = "\nHelp me!!";

// try {
//     fs.appendFileSync("./example.txt", data);
//     console.log("Write successful!");
// } catch (error) {
//     console.log(error);
// }

// ============================FS Module====================================

// import fs from 'fs';

// try {
//     fs.unlinkSync("./ex1.txt");
//     console.log("Delete successful!");
// } catch (error) {
//     console.log(error);
// }

// In FS Module, we actuaully use 4:
// readFileSync = read from file
// writeFileSync = write to file(overwrite)
// appendFileSync = write to file(append)
// unlinkSync = delete file

// ============================HTTP Module====================================

// import http from 'http';

// const server = http.createServer((req, resp)=>{
//     resp.writeHead(200, { 'Content-Type': 'text/plain' });
//     resp.end('Hello from my Node.js HTTP server!');
// });

// server.listen(3000, ()=>{
//     console.log('Server is running! Open http://localhost:3000 in your browser.');
// })

// ============================PATH MODULE====================================

// import path from 'path';
// const path = require('path');

// console.log(path.join('files', 'example.txt')); // files/example.txt
// console.log(path.extname('example.pdf')); // .pdf
// console.log(path.basename('files/example.txt')); // example.txt

// ============================OS====================================

// import os from 'os';

// console.log(os.platform()); // win32
// console.log(os.totalmem()); // 16953597952
// console.log(os.cpus().length); // 16

// ============================CALL BACK====================================

// function getUser(id, callback){ //callback is not normal parameter that recieve value but it recieve the anonymous function
//     // setTimeout(()=>{
//     //     callback({id,name:"sokleap"});
//     // },10000) //10s

//     callback({id,name:"sokleap"});
// }

// getUser(1, (user)=>{console.log(user);})

// ============================PROMISE====================================

// myPromise is an Object
// const myPromise = new Promise((resolve, reject)=>{
//     const result = 9+1;
//     if(result === 10){
//         resolve("Correct Answer");
//     }
//     else{
//         reject("Wrong Answer");
//     }
// });

// myPromise
// .then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// ============================FETCH API====================================

// const apiUrl = "https://pharmacy-system-backend-j77b.onrender.com/api/products";

// fetch(apiUrl)
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Response Error: "+response.status);
//     }

//     return response.json();
// })
// .then((data)=>{
//     const resp = data.data.map(item=>item.product_name).join("\n");

//     console.log(resp);
// })

// ============================MAKE HTTP SERVER====================================

// import http from 'http';

// // create function #server
// const server = http.createServer((req, res)=>{ //create anonymous function with return (req, res) =>

//     function status(statusCode){
//         return res.writeHead(statusCode, {"content-type":"text/plain; charset=utf-8"});
//     };

//     if(req.url === "/"){
//         status(200);
//         res.end("Welcome to #Home");
//     }
//     else  if(req.url === "/about"){
//         status(200);
//         res.end("Now , you are in the #About");
//     }
//     else{
//         status(404); // url not found
//         res.end("Content not found");
//     }
// });

// server.listen(3000, ()=>{
//     console.log("Sever is running.\nUrl: http://localhost:3000");
// })

// ============================DATA FROM REQUEST====================================

// import http from 'http';

// const server = http.createServer((req, res) => {
//     let body = "Hello Brother.";

//     req.on('data', (chuck) => {body += chuck;});

//     req.on('end', () => {
//         console.log(body);
//         res.end("Data Receive Successful.\n"+body);
//     })
// });

// server.listen(3000, ()=>{
//     console.log("Sever is running.\nUrl: http://localhost:3000");
// })


// ============================CREATE WEB SERVER WITH EXPRESSJS====================================

// import express from 'express';

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello from ExpressJs");
// });

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// });

// ============================SEND AS JSON====================================

// import express from 'express';

// const app = express();

// app.get("/api/user",(req, res) => {
//     res.json({
//         id: 1,
//         name: "Sokleap",
//         age: 21,
//         university: "Royal University of Phnom Penh"
//     });
// });

// app.listen(9999, () => {
//     console.log("http://localhost:9999/api/user");
// });

// ============================ROUTING====================================

// import express from 'express';

// const app = express();

// app.get("/api/student", (req, res) => {
//     res.send("Show all student successful.");
// });

// app.post("/api/student", (req, res) => {
//     res.json({
//         message: "Create student successful.",
//         data: req.body
//     })
// });

// app.get("/api/student/:id", (req, res) => {
//     res.send(`Student detail:\n${req.params.id}`);
// });

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// });

// ============================ROUTING WITH EXPRESS====================================

// import express, { json } from 'express';
// import studentRoute from "./routes/student.js";

// const app = express();

// app.use(express.json());

// app.use("/student", studentRoute);

// app.listen(3000, () => {
//     console.log("http://localhost:3000");
// })

// import express from 'express';
// import productRoute from './routes/student.js';

// const app = express();

// app.use("/product", productRoute);

// app.listen(3000, () => {
//     console.log("http://localhost:3000/product");
// });

// ============================MONGODB DATABASE CONNECTION====================================

// import mongoose from "mongoose";

// mongoose.connect('mongodb://localhost:27017/NodeJsApp')
// .then(() => {
//     console.log("mongodb connection successful.");
// })
// .catch((error) => {
//     console.log("mongodb connection fail:\n" + error);
// })

// ============================CREATE SCHEMA AND MODEL====================================

// // import mongoose from "mongoose";

// // create userSchema object
// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     age: {type: Number},
//     createAt: {type: Date, default: Date.now}
// });

// //create User model
// const User = mongoose.model('User', userSchema);

// const newUser = new User({
//     name: "Ranuth",
//     email: "nuthcute@gmail.com",
//     age: 22
// });

// await newUser.save();

// =========IMPROVE CREATE SCHEMA & MODEL SAVE DATA TO MONGODB COMPASS=================

// import mongoose, { Schema } from "mongoose";

// mongoose.connect("mongodb://localhost:27017/NodeJsApp")
// .then(() => {
//     sendData();
// })
// .catch((error) => {
//     console.log("Connecto to mongodb fail.\n",error);
// });

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     university: {
//         type: String,
//         required: true
//     },
//     createAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const User = mongoose.model("User", userSchema);

// async function sendData(){
//     try {
//         const newUser = new User({
//             name: "Yon Chanranuth",
//             university: "Royal University of Phnom Penh",
//         });

//         const saveUser = await newUser.save();

//         console.log("Create User data successful.",saveUser);
//     } catch (error) {
//         console.log("Create User data unsuccessful:\n",error);
//     }
// }

// ============================SEND DATA TO CONNECTION DB====================================

// import connector from "./database/connection.js";
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     university: {type: String, required: true},
//     createAt: {type: Date, default: Date.now}
// });

// // users is collection or table name
// // Users is mongoose model name
// const users = mongoose.model("Users", userSchema);

// async function postData() {
//     try {
//         const saveUser = await users.insertMany([
//             {
//                 name: "Phorn Sokleap",
//                 university: "Royal University of Phnom Penh",
//             },
//             {
//                 name: "Yon Chanranuth",
//                 university: "Royal University of Phnom Penh",
//             },
//             {
//                 name: "Moeun Samet",
//                 university: "Royal University of Phnom Penh",
//             }
//         ]);

//         console.log("Send Data Successful.",saveUser);

//     } catch (error) {
//         console.log("Send Data Fail:\n",error);
//     }
// }

// connector()
// .then(() => {
//     postData();
// })
// .catch((error) => {
//     console.log(error);
// })

// ============================GET DATA TO CONNECTION DB====================================

// import connector from "./database/connection.js"
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     university: {type: String, required: true},
//     createAt: {type: Date, default: Date.now}
// });

// const Users = new mongoose.model("Users",userSchema);

// async function getData() {
//     try {
//         const allUsers = await Users.find();

//         console.log("Read Data Successful.\n"+allUsers);
//     } catch (error) {
//         console.log("Error:\n",error);
//     }
// }

// connector()
// .then(() => {
//     getData();
// })
// .catch((error) => {
//     console.log(error);
// })

// ============================FIND DATA TO CONNECTION DB====================================

// import connector from "./database/connection.js"
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     university: {type: String, required: true},
//     createAt: {type: Date, default: Date.now}
// });

// const Users = new mongoose.model("Users",userSchema);

// async function findData() {
//     try {
//         const allUsers = await Users.findById("6a74c0082d22c57f73075d9b");

//         console.log("Read Data Successful.\n"+allUsers);
//     } catch (error) {
//         console.log("Error:\n",error);
//     }
// }

// connector()
// .then(() => {
//     findData();
// })
// .catch((error) => {
//     console.log(error);
// })

// ============================UPDATE DATA TO CONNECTION DB====================================

// import mongoose from "mongoose";
// import connector from "./database/connection.js";

// // This is the JavaScript Object use for validate data
// const user_validator = new mongoose.Schema({
//     name: {type: String, required: true},
//     university: {type: String, required: true},
//     createAt: {type: Date, default: Date.now}
// });

// // This is the JavaScript Object use for create model
// const user = mongoose.model("users_data", user_validator);

// async function updateData() {
//     try {
//         const updateUser = await user.findByIdAndUpdate("6a74c0082d22c57f73075d9b", {
//             name: "Phorn Sokleap"
//         })

//         if(!updateUser){
//             console.log("Collection is not found!")
//         }
//         else{
//             console.log("Update Successfull.")
//         }

//     } catch (error) {
//         console.log("Error:\n",error);
//     }
// }

// connector()
// .then(() => {
//     updateData();
// })
// .catch((error) => {
//     console.log(error)
// });

// ============================DELETE DATA FROM DB====================================

// import mongoose from "mongoose";
// import connector from "./database/connection.js";

// // Create object of validator
// const user_validator = new mongoose.Schema({
//     name: {type: String, required: true},
//     university: {type: String, required: true},
//     createAt: {type: Date, default: Date.now}
// });

// // Create object of model
// const UserModel = new mongoose.model("users", user_validator);

// // Create function for execute the process of data
// async function deleteData(){
//     try {
//         const findForDelete = await UserModel.findByIdAndDelete(
//             "6a74c0082d22c57f73075d9d",
//         );

//         if(findForDelete){
//             console.log("Delete User Successful.");
//         }
//         else{
//             console.log("User Id Not Found.");
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// // Call function to execute and handle the error
// connector()
// .then(() => {
//     deleteData();
// })
// .catch((error) => {
//     console.log(error.message);
// })

// ============================FULL RESTFUL API====================================

// import express, { json } from 'express';
// import route from './routes/api.js';
// import cn from './database/connection.js';

// // set variable app equal to method express from model express
// const app = express();

// // parse or convert data from database to json()
// app.use(express.json());

// // set prefix api to route from ./routes/api.js
// app.use("/api", route);

// // create web server
// cn()
// .then(() => {
//     app.listen(3000, () => {
//         console.log("http://localhost:3000");
//     })
// })
// .catch((error) => {
//     console.log(error);
// });

// ============================New Practice====================================

import myConnection from './database/connection.js';
import express from 'express';
import route from './routes/adminApi.js'
import 'dotenv/config'

// create variable variable for mothod express from express module
const app = express();

// convert data to json concept
app.use(express.json());

// create prefix for router
app.use("/api", route);

// create web sever
myConnection()
.then(() => {
    // listen to port 3000
    app.listen(3000, () => {
        console.log("http://localhost:3000/api/admin");
    })
})
.catch((error) => {
    console.log(error);
})