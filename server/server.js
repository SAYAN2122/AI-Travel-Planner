import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import travelRoutes from "./routes/travelRoutes.js";

import errorHandler from "./middleware/errorMiddleware.js";

import {
  generalLimiter,
  aiLimiter,
} from "./middleware/rateLimiter.js";

const app = express();

/*
====================================
Connect Database
====================================
*/

connectDB();

/*
====================================
Express Configuration
====================================
*/

app.disable("x-powered-by");

app.set("trust proxy", 1);

/*
====================================
Security Middleware
====================================
*/

app.use(helmet());

/*
====================================
CORS
====================================
*/

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {

      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {

        return callback(null, true);

      }

      return callback(new Error("Not allowed by CORS"));

    },
    credentials: true,
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
  })
);

/*
====================================
Body Parser
====================================
*/

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
====================================
Rate Limiter
====================================
*/

app.use(generalLimiter);

/*
====================================
Health Check
====================================
*/

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "AI Travel Planner API Running Successfully 🚀",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date(),
  });

});

/*
====================================
Authentication Routes
====================================
*/

app.use(
  "/api/auth",
  authRoutes
);

/*
====================================
Travel Routes
====================================
*/

app.use(
  "/api/travel",
  aiLimiter,
  travelRoutes
);

/*
====================================
Dashboard Routes
====================================
*/


/*
====================================
404 Handler
====================================
*/

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });

});

/*
====================================
Global Error Handler
====================================
*/

app.use(errorHandler);

/*
====================================
Start Server
====================================
*/

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {

  console.log("=========================================");
  console.log("🚀 AI Travel Planner Server Started");
  console.log("=========================================");
  console.log(`Environment : ${process.env.NODE_ENV || "development"}`);
  console.log(`Port        : ${PORT}`);
  console.log("=========================================");

});

/*
====================================
Graceful Shutdown
====================================
*/

process.on("SIGINT", () => {

  console.log("\nShutting down server...");

  server.close(() => {

    console.log("Server stopped.");

    process.exit(0);

  });

});

process.on("SIGTERM", () => {

  console.log("\nSIGTERM received.");

  server.close(() => {

    console.log("Server stopped.");

    process.exit(0);

  });

});