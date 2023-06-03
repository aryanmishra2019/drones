import express from "express";
import { addMission, getByMissionId, updateMission, deleteMission } from "../controllers/mission";
import { authenticateToken } from "../utils/authUtils";

const router = express.Router();

router.post('/add', authenticateToken, addMission);
router.get('/:missionId', authenticateToken, getByMissionId);
router.delete('/:missionId', authenticateToken, deleteMission);
router.put('/:missionId', authenticateToken, updateMission);

export default router;