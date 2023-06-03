import express from "express";
import { getByEmail, addUser, deleteUser, updateUser } from "../controllers/user";
import { authenticateToken, authenticateAdmin } from "../utils/authUtils";

const router = express.Router();

router.get('/:email', authenticateToken, authenticateAdmin, getByEmail);
router.post('/add', authenticateToken, authenticateAdmin, addUser);
router.delete('/delete/:email', authenticateToken, authenticateAdmin, deleteUser);
router.put('/update/:email', authenticateToken, authenticateAdmin, updateUser);

export default router;