import express from "express";
import userRoutes from "./routes/user";
import siteRoutes from "./routes/site";
import droneRoutes from "./routes/drone";
import missionRoutes from "./routes/mission";
import authRoutes from "./routes/auth";
import connectDB from './db';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/site', siteRoutes);
app.use('/drone', droneRoutes);
app.use('/mission', missionRoutes);


app.listen(3000, () => {
    console.log("Server listening on port 3000");
    connectDB();
});