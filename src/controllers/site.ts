import { Request, Response } from "express";
import SiteModel from "../models/site";

export const getBySiteId = async (req: Request, res: Response) => {
    try {
        const { siteId } = req.params;
        const site = await SiteModel.findById(siteId);
        if (!site) {
            return res.status(404).json({ message: 'Site not found' });
        }
        return res.json(site);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const addSite = async (req: any, res: Response) => {
    try {
        const { siteName, email, sitePosition } = req.body;
        const adminEmail = req.user.email;
        const newSite = new SiteModel({
            siteName,
            userEmail: email ? email : adminEmail,
            sitePosition
        });
        const response = await newSite.save();
        return res.status(201).json(response);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const updateSite = async (req: Request, res: Response) => {
    try {
        const { siteId } = req.params;
        const { userEmail, siteName, sitePosition } = req.body;
        const response = await SiteModel.findByIdAndUpdate(
            siteId,
            { userEmail, siteName, sitePosition },
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

export const deleteSite = async (req: Request, res: Response) => {
    try {
        const { siteId } = req.params;
        const response = await SiteModel.findByIdAndDelete(siteId);
        if (!response) {
            return res.status(404).json({ message: "Site not found" });
        }
        return res.json({ message: "Site deleted successfully" });
    } catch (err) {
        console.log(err);
        throw (err);
    }
}