import mongoose from "mongoose";

// create validor object for collection
const admin_validator = new mongoose.Schema(
    {
        username: {type: String, required: true},
        gender: {type: String, required: true},
        address: {type: String, required: true},
        password: {type: String, required: true},
        avatar: { type: String },
        createAt: {type: Date, default: Date.now},
        updateAt: {type: Date, default: null}
    }
);

// create model object for migration collection
const admin_model = mongoose.model(
    "admins",
    admin_validator
);

export default admin_model;