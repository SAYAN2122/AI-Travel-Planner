import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  generateTrip,
  getTravelHistory,
  getTripById,
  updateTrip,
  deleteTrip,
} from "../controllers/travelController.js";

import { aiLimiter } from "../middleware/rateLimiter.js";
import validateTravelRequest from "../middleware/validateTravelRequest.js";

const router = express.Router();

/*
====================================
Generate Trip
====================================
*/

router.post(
  "/generate",
  protect,
  aiLimiter,
  validateTravelRequest,
  generateTrip
);

/*
====================================
Travel History
====================================
*/

router.get(
  "/history",
  protect,
  getTravelHistory
);

/*
====================================
Single Trip
====================================
*/

router.get(
  "/:id",
  protect,
  getTripById
);

/*
====================================
Update Trip
====================================
*/

router.put(
  "/:id",
  protect,
  updateTrip
);

/*
====================================
Delete Trip
====================================
*/

router.delete(
  "/:id",
  protect,
  deleteTrip
);

export default router;