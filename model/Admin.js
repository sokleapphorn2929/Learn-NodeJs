import mongoose from "mongoose";

// create validator object
const admin_validator = new mongoose.Schema(
    {
        admin_name: {type: String, required: true, unique: true},
        admin_role: {type: String, required: true},
        admin_address: {type: String, required: true},
        createAt: {type: Date, default: Date.now},
        updateAt: {type: Date, default: null}
    }
);

// create object for model
const admin_model = mongoose.model("admins", admin_validator);

export default admin_model;