import TravelHistory from "../models/TravelHistory.js";

/*
=================================================
GET DASHBOARD DATA
GET /api/dashboard
Private Route
=================================================
*/

export const getDashboardData = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get all trips of logged-in user
    const trips = await TravelHistory.find({ user: userId }).sort({
      createdAt: -1,
    });

    /*
    ============================================
    If no trips exist
    ============================================
    */

    if (trips.length === 0) {
      return res.status(200).json({
        success: true,
        dashboard: {
          totalTrips: 0,
          totalBudget: 0,
          countriesVisited: 0,
          monthlyTrips: [],
          monthlyBudget: [],
          travelStyles: [],
          recentTrips: [],
          upcomingTrip: null,
          aiInsights: [],
        },
      });
    }

    /*
    ============================================
    Total Trips
    ============================================
    */

    const totalTrips = trips.length;

    /*
    ============================================
    Total Budget
    ============================================
    */

    const totalBudget = trips.reduce((sum, trip) => {
      return sum + trip.budget;
    }, 0);

    /*
    ============================================
    Unique Destinations
    ============================================
    */

    const uniqueDestinations = [
      ...new Set(trips.map((trip) => trip.destination)),
    ];

    const countriesVisited = uniqueDestinations.length;

    /*
    ============================================
    Monthly Trips
    ============================================
    */

    const monthlyTripsMap = {};

    trips.forEach((trip) => {
      const month = trip.createdAt.toLocaleString("default", {
        month: "short",
      });

      monthlyTripsMap[month] =
        (monthlyTripsMap[month] || 0) + 1;
    });

    const monthlyTrips = Object.keys(monthlyTripsMap).map(
      (month) => ({
        month,
        trips: monthlyTripsMap[month],
      })
    );

    /*
    ============================================
    Monthly Budget
    ============================================
    */

    const monthlyBudgetMap = {};

    trips.forEach((trip) => {
      const month = trip.createdAt.toLocaleString("default", {
        month: "short",
      });

      monthlyBudgetMap[month] =
        (monthlyBudgetMap[month] || 0) + trip.budget;
    });

    const monthlyBudget = Object.keys(monthlyBudgetMap).map(
      (month) => ({
        month,
        budget: monthlyBudgetMap[month],
      })
    );

    /*
    ============================================
    Travel Style Distribution
    ============================================
    */

    const travelStyleMap = {};

    trips.forEach((trip) => {
      travelStyleMap[trip.travelStyle] =
        (travelStyleMap[trip.travelStyle] || 0) + 1;
    });

    const travelStyles = Object.keys(travelStyleMap).map(
      (style) => ({
        name: style,
        value: travelStyleMap[style],
      })
    );

    /*
    ============================================
    Recent Trips
    ============================================
    */

    const recentTrips = trips.slice(0, 5);

    /*
    ============================================
    Upcoming Trip
    ============================================
    */

    const upcomingTrip = recentTrips[0];

    /*
    ============================================
    AI Insights
    ============================================
    */

    const averageBudget = Math.round(
      totalBudget / totalTrips
    );

    const favouriteDestination =
      uniqueDestinations.length > 0
        ? uniqueDestinations[0]
        : "N/A";

    const favouriteStyle =
      travelStyles.length > 0
        ? travelStyles.sort(
            (a, b) => b.value - a.value
          )[0].name
        : "N/A";

    const aiInsights = [
      {
        title: "Average Budget",
        description: `Your average trip budget is ₹${averageBudget}.`,
      },
      {
        title: "Favourite Destination",
        description: `You frequently travel to ${favouriteDestination}.`,
      },
      {
        title: "Travel Style",
        description: `${favouriteStyle} is your preferred travel style.`,
      },
      {
        title: "Trips Planned",
        description: `You have successfully planned ${totalTrips} AI-powered trips.`,
      },
    ];

    /*
    ============================================
    Response
    ============================================
    */

    res.status(200).json({
      success: true,
      dashboard: {
        totalTrips,
        totalBudget,
        countriesVisited,
        monthlyTrips,
        monthlyBudget,
        travelStyles,
        recentTrips,
        upcomingTrip,
        aiInsights,
      },
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data.",
    });
  }
};