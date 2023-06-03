import mongoose, { Schema, Document } from "mongoose";

interface Drone extends Document {
    droneName: string;
    userEmail: string;
    siteId: string;
    droneType: string;
    makeName: string;
}

const droneSchema = new Schema<Drone>({
    droneName: { type: String, required: true },
    userEmail: { type: String, required: true },
    droneType: { type: String, required: true },
    makeName: { type: String, required: true },
    siteId: { type: String }
})

const DroneModel = mongoose.model<Drone>('drones', droneSchema);

export default DroneModel;