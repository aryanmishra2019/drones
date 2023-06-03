import mongoose, { Schema, Document } from "mongoose";

interface Mission extends Document {
    missionName: string;
    siteId: string;
    droneId: string;
    alt: number;
    speed: number;
    category: string;
}

const missionSchema = new Schema<Mission>({
    missionName: { type: String, required: true },
    siteId: { type: String, required: true },
    droneId: { type: String },
    alt: { type: Number, required: true },
    speed: { type: Number, required: true },
    category: { type: String, required: true }
})

const MissionModel = mongoose.model<Mission>('missions', missionSchema);

export default MissionModel;