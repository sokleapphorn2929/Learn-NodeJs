// import mongoose from "mongoose";

// function connector(){
//     return mongoose.connect("mongodb://localhost:27017/NodeJsApp")
//     .then(() => {
//         console.log("Connection successful.");
//     })
//     .catch((error) => {
//         console.log("Connectin fail.\n",error);
//         throw error;
//     })
// }    

// export default connector;

// ===========================New Connection===========================

import mongoose from "mongoose";

const dbConnection = () => {
    return mongoose.connect("mongodb://localhost:27017/NodeJsApp")
    .then(() => {
        console.log("Connection is successful.");
    })
    .catch((error)=>{
        console.log("Connection is fail.");
        throw error;
    });
}

export default dbConnection;