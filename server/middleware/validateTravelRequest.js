const validateTravelRequest = (req, res, next) => {
  const {
    destination,
    days,
    budget,
    travelStyle,
    travelers,
  } = req.body;

  // Destination
  if (
    !destination ||
    typeof destination !== "string" ||
    destination.trim() === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "Destination is required.",
    });
  }

  // Days
  if (
    !Number.isInteger(days) ||
    days <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Days must be greater than 0.",
    });
  }

  // Budget
  if (
    typeof budget !== "number" ||
    budget <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Budget must be greater than 0.",
    });
  }

  // Travelers
  if (
    !Number.isInteger(travelers) ||
    travelers <= 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Travelers must be greater than 0.",
    });
  }

  // Travel Style

  const allowedStyles = [
    "Budget",
    "Comfort",
    "Luxury",
  ];

  if (!allowedStyles.includes(travelStyle)) {
    return res.status(400).json({
      success: false,
      message:
        "Travel Style must be Budget, Comfort or Luxury.",
    });
  }

  next();
};

export default validateTravelRequest;