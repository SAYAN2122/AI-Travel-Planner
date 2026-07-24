import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getDashboardData } from "../controllers/dashboardController.js";

const router = express.Router();

/*
    Route: GET /api/dashboard
    Description: Fetch dashboard analytics for the logged-in user
    Access: Private
*/
router.get("/", protect, getDashboardData);

export default router;