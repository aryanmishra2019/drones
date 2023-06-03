import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('MongoDB connected');

    } catch (err) {
        console.log('MongoDB connection error:', err);
    }
}

export default connectDB;