import rateLimit from "express-rate-limit";

// General limiter for all API requests
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 100,

  message: {
    success: false,
    message:
      "Too many requests from this IP. Please try again after 15 minutes.",
  },

  standardHeaders: true,

  legacyHeaders: false,
});

// AI Route limiter
export const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 20,

  message: {
    success: false,
    message:
      "AI generation limit reached. Please try again later.",
  },

  standardHeaders: true,

  legacyHeaders: false,
});