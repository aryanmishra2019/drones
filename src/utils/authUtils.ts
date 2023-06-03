import jwt from "jsonwebtoken";
import { Response, NextFunction } from 'express';
import { ACCESS_TOKEN_SECRET } from "../config";

export function authenticateToken(req: any, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Missing token' });
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, data: any) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = {
            userId: data.userId,
            email: data.email,
            userRole: data.userRole,
        };
        next();
    });
}

export const authenticateAdmin = (req: any, res: Response, next: NextFunction) => {
    if (req.user.userRole !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};