import express from "express";

import {
  signup,
  login,
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

/*
====================================
Public Routes
====================================
*/

router.post("/signup", signup);

router.post("/login", login);

/*
====================================
Protected Routes
====================================
*/

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put("/change-password", protect, changePassword);

router.delete("/delete-account", protect, deleteAccount);

export default router;