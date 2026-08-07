import mongoose from "mongoose";

// create object validator
const user_validator = new mongoose.Schema({
    name: {type: String, required: true},
    university: {type: String, required: true},
    createAt: {type: Date, default: Date.now}
})

// create object model
const user_model = new mongoose.model("users", user_validator);

export default user_model;