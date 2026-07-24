import { getHistory } from "./travelService";

export const getDashboardData = async () => {
  const response = await getHistory();

  const trips = response.data;

  const totalTrips = trips.length;

  const totalBudget = trips.reduce(
    (sum, trip) => sum + trip.budget,
    0
  );

  const uniqueDestinations = [
    ...new Set(
      trips.map((trip) => trip.destination)
    ),
  ];

  const styleCount = {};

  trips.forEach((trip) => {
    styleCount[trip.travelStyle] =
      (styleCount[trip.travelStyle] || 0) + 1;
  });

  const favoriteStyle =
    Object.keys(styleCount).reduce(
      (a, b) =>
        styleCount[a] > styleCount[b] ? a : b,
      Object.keys(styleCount)[0]
    ) || "-";

  const foodCount = {};

  trips.forEach((trip) => {
    foodCount[trip.foodPreference] =
      (foodCount[trip.foodPreference] || 0) + 1;
  });

  const favoriteFood =
    Object.keys(foodCount).reduce(
      (a, b) =>
        foodCount[a] > foodCount[b] ? a : b,
      Object.keys(foodCount)[0]
    ) || "-";

  return {
    trips,

    totalTrips,

    totalBudget,

    favoriteStyle,

    favoriteFood,

    totalDestinations:
      uniqueDestinations.length,
  };
};