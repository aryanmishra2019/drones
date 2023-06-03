import { ACCESS_TOKEN_SECRET } from "../config";
import { Request, Response } from "express";
import UserModel from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email }).select('email password userRole');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const payload = {
            email: user.email,
            name: user.name,
            userRole: user.userRole
        }
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
    } catch (err) {
        console.log(err);
        throw err;
    }
}