import { Request, Response } from "express";
import UserModel from "../models/user";

export const getByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const addUser = async (req: Request, res: Response) => {
    try {
        const { name, userRole, email } = req.body;
        const newUser = new UserModel({
            name,
            userRole,
            email
        });
        const response = await newUser.save();
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const response = await UserModel.deleteOne({ email });
        if (!response.deletedCount) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const updatedData = req.body;
        const response = await UserModel.findOneAndUpdate({ email }, updatedData, { new: true });
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(response);
    } catch (err) {
        console.log(err);
        throw (err);
    }
}