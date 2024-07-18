import mongoose from "mongoose";

const genImageSchema = new mongoose.Schema({
    cloudid: {
        type: String,
        require: true,
    },
    prompt: {
        type: String,
        require: true,
    }
});

const GenImage = mongoose.model("GenImage", genImageSchema);

export default GenImage;