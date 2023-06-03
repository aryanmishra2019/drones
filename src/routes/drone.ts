import express from "express";
import { addDrone, getByDroneId, deleteDrone, updateSiteId, updateUserEmail } from "../controllers/drone";
import { authenticateToken, authenticateAdmin } from "../utils/authUtils";

const router = express.Router();

router.post('/add', authenticateToken, authenticateAdmin, addDrone);
router.get('/:droneId', authenticateToken, getByDroneId);
router.delete('/:droneId', authenticateToken, authenticateAdmin, deleteDrone);
router.put('/update/email/:droneId', authenticateToken, authenticateAdmin, updateUserEmail);
router.put('/update/site/:droneId', authenticateToken, updateSiteId);

export default router;