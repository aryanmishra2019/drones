import { Request, Response } from "express";
import MissionModel from "../models/mission";
import DroneModel from "../models/drone";

export const addMission = async (req: Request, res: Response) => {
    try {
        const { siteId, missionName, alt, speed, category } = req.body;
        const newMission = new MissionModel({
            siteId,
            missionName,
            alt,
            speed,
            category
        });
        const response = await newMission.save();
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const getByMissionId = async (req: Request, res: Response) => {
    try {
        const { missionId } = req.params;
        const mission = await MissionModel.findById(missionId);
        if (!mission) {
            return res.status(404).json({ message: 'Mission not found' });
        }
        return res.json(mission);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteMission = async (req: Request, res: Response) => {
    try {
        const { missionId } = req.params;
        const response = await MissionModel.findByIdAndDelete(missionId);
        if (!response) {
            return res.status(404).json({ message: "Mission not found" });
        }
        return res.json({ message: "Mission deleted successfully" });
    } catch (err) {
        console.log(err);
        throw (err);
    }
}

export const updateMission = async (req: Request, res: Response) => {
    try {
        const { missionId } = req.params;
        const { droneId } = req.body;
        const response = await MissionModel.findByIdAndUpdate(
            missionId,
            { droneId },
            { new: true }
        );
        if (!response) {
            return res.status(404).json({ message: "Mission not found" });
        }
        return res.json(response);
    } catch (err) {
        console.log(err);
        throw (err);
    }
}