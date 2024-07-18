import mongoose, { mongo } from 'mongoose'

const mongoConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(error, "FAILED TO CONNECT TO MONGODB")
    }
}

export default mongoConnect;

