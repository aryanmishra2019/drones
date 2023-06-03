import mongoose, { Schema, Document } from "mongoose";
import { DEFAULT_USER_PASSWORD } from "../config";

interface User extends Document {
    name: string;
    userRole: string;
    email: string;
    password: string;
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    userRole: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, default: DEFAULT_USER_PASSWORD }
})

const UserModel = mongoose.model<User>('users', userSchema);

export default UserModel;