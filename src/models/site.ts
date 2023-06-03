import mongoose, { Schema, Document } from "mongoose";

interface Site extends Document {
    siteName: string;
    userEmail: string;
    sitePosition: object;
}

const siteSchema = new Schema<Site>({
    siteName: { type: String, required: true },
    sitePosition: {
        latitude: { type: String, required: true },
        longitude: { type: String, required: true }
    },
    userEmail: { type: String, required: true }
})

const SiteModel = mongoose.model<Site>('sites', siteSchema);

export default SiteModel;