import express from "express";
import { addSite, updateSite, getBySiteId, deleteSite } from "../controllers/site";
import { authenticateToken, authenticateAdmin } from "../utils/authUtils";

const router = express.Router();

router.post('/add', authenticateToken, authenticateAdmin, addSite);
router.get('/:siteId', authenticateToken, authenticateAdmin, getBySiteId);
router.delete('/:siteId', authenticateToken, authenticateAdmin, deleteSite);
router.put('/:siteId', authenticateToken, authenticateAdmin, updateSite);

export default router;