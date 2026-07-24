import mongoose from "mongoose";

/*
========================================
Itinerary Schema
========================================
*/

const itinerarySchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    activities: [
      {
        type: String,
      },
    ],
  },
  {
    _id: false,
  }
);

/*
========================================
Hotel Schema
========================================
*/

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    price: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    _id: false,
  }
);

/*
========================================
Budget Breakdown Schema
========================================
*/

const budgetBreakdownSchema = new mongoose.Schema(
  {
    accommodation: {
      type: Number,
      default: 0,
    },

    food: {
      type: Number,
      default: 0,
    },

    transportation: {
      type: Number,
      default: 0,
    },

    activities: {
      type: Number,
      default: 0,
    },

    shopping: {
      type: Number,
      default: 0,
    },

    miscellaneous: {
      type: Number,
      default: 0,
    },
  },
  {
    _id: false,
  }
);

/*
========================================
Travel History Schema
========================================
*/

const travelHistorySchema = new mongoose.Schema(
  {
    /*
    Logged-in User
    */

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    /*
    Trip Details
    */

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    days: {
      type: Number,
      required: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    travelStyle: {
      type: String,
      required: true,
      enum: ["Budget", "Comfort", "Luxury"],
    },

    travelers: {
      type: Number,
      required: true,
      min: 1,
    },

    foodPreference: {
      type: String,
      required: true,
      enum: [
        "Vegetarian",
        "Non-Vegetarian",
        "Vegan",
      ],
    },

    /*
    AI Generated Data
    */

    itinerary: [itinerarySchema],

    hotels: [hotelSchema],

    foods: [
      {
        type: String,
      },
    ],

    packingChecklist: [
      {
        type: String,
      },
    ],

    budgetBreakdown: budgetBreakdownSchema,

    /*
    Favorite
    */

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const TravelHistory = mongoose.model(
  "TravelHistory",
  travelHistorySchema
);

export default TravelHistory;