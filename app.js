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

// ============================HTTP Module====================================

