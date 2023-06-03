import { Request, Response } from "express";
import DroneModel from "../models/drone";

export const addDrone = async (req: any, res: Response) => {
    try {
        const { droneName, email, droneType, makeName } = req.body;
        const adminEmail = req.user.email;
        const newDrone = new DroneModel({
            droneName,
            userEmail: email ? email : adminEmail,
            droneType,
            makeName
        });
        const response = await newDrone.save();
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const getByDroneId = async (req: Request, res: Response) => {
    try {
        const { droneId } = req.params;
        const drone = await DroneModel.findById(droneId);
        if (!drone) {
            return res.status(404).json({ message: 'Drone not found' });
        }
        return res.json(drone);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const updateUserEmail = async (req: Request, res: Response) => {
    try {
        const { droneId } = req.params;
        const { userEmail } = req.body;
        const response = await DroneModel.findByIdAndUpdate(
            droneId,
            { userEmail },
            { new: true }
        );
        if (!response) {
            return res.status(404).json({ message: "Site not found" });
        }
        return res.json(response);
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

export const updateSiteId = async (req: Request, res: Response) => {
    try {
        const { droneId } = req.params;
        const { siteId } = req.body;
        const response = await DroneModel.findByIdAndUpdate(
            droneId,
            { siteId },
            { new: true }
        );
        if (!response) {
            return res.status(404).json({ message: "Site not found" });
        }
        return res.json(response);
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

export const deleteDrone = async (req: Request, res: Response) => {
    try {
        const { droneId } = req.params;
        const response = await DroneModel.findByIdAndDelete(droneId);
        if (!response) {
            return res.status(404).json({ message: "Drone not found" });
        }
        return res.json({ message: "Drone deleted successfully" });
    } catch (err) {
        console.log(err);
        throw (err);
    }
}