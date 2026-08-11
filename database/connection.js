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

function connector() {
    return mongoose.connect("mongodb://localhost:27017/NodeJsApp")
    .then(() => {
        console.log("Your connection is successful.");
    })
    .catch((error) => {
        console.log("Your connection is fail.")
        throw error;
    })
}

export default connector;