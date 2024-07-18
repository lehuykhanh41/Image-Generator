import mongoose from "mongoose";
import GenImage from "./GenImageModel.js";

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    credits: {
        type: Number,
        default: 0,
    },
    imageHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "GenImage"
    }],
    avatar: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

export default User;