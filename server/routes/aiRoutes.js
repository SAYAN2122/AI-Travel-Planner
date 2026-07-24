import express from "express";

import { generateTrip } from "../controllers/aiController.js";

const router = express.Router();

router.post(
    "/generate",
    protect,
    generateTrip
);

export default router;