import TravelHistory from "../models/TravelHistory.js";
import generatePrompt from "../services/promptService.js";
import generateAIResponse from "../services/groqService.js";
import parseAIResponse from "../utils/jsonParser.js";

/*
========================================
Generate AI Trip
POST /api/travel/generate
========================================
*/

export const generateTrip = async (req, res, next) => {
  try {
    const {
      destination,
      days,
      budget,
      travelStyle,
      travelers,
      foodPreference,
    } = req.body;

    const prompt = generatePrompt({
      destination,
      days,
      budget,
      travelStyle,
      travelers,
      foodPreference,
    });

    const aiResponse = await generateAIResponse(prompt);

    const tripData = parseAIResponse(aiResponse);

    const savedTrip = await TravelHistory.create({
      user: req.user._id,

      destination,
      days,
      budget,
      travelStyle,
      travelers,
      foodPreference,

      itinerary: tripData.itinerary,
      hotels: tripData.hotels,
      foods: tripData.foods,
      packingChecklist: tripData.packingChecklist,
      budgetBreakdown: tripData.budgetBreakdown,
    });

    return res.status(201).json({
      success: true,
      message: "Trip generated successfully.",
      data: savedTrip,
    });
  } catch (error) {
    next(error);
  }
};

/*
========================================
Get Logged-in User History
GET /api/travel/history
========================================
*/

export const getTravelHistory = async (req, res, next) => {
  try {
    const history = await TravelHistory.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (error) {
    next(error);
  }
};

/*
========================================
Get Single Trip
GET /api/travel/:id
========================================
*/

export const getTripById = async (req, res, next) => {
  try {
    const trip = await TravelHistory.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: trip,
    });
  } catch (error) {
    next(error);
  }
};

/*
========================================
Update Trip
PUT /api/travel/:id
========================================
*/

export const updateTrip = async (req, res, next) => {
  try {
    const {
      destination,
      days,
      budget,
      travelStyle,
      travelers,
      foodPreference,
    } = req.body;

    const trip = await TravelHistory.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found.",
      });
    }

    trip.destination = destination;
    trip.days = days;
    trip.budget = budget;
    trip.travelStyle = travelStyle;
    trip.travelers = travelers;
    trip.foodPreference = foodPreference;

    await trip.save();

    return res.status(200).json({
      success: true,
      message: "Trip updated successfully.",
      data: trip,
    });
  } catch (error) {
    next(error);
  }
};

/*
========================================
Delete Trip
DELETE /api/travel/:id
========================================
*/

export const deleteTrip = async (req, res, next) => {
  try {
    const trip = await TravelHistory.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Trip deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};