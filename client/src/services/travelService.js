import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/*
====================================
Generate Trip
====================================
*/

export const generateTrip = async (tripData) => {
  const token = localStorage.getItem("token");

  const { data } = await API.post(
    "/travel/generate",
    tripData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/*
====================================
Travel History
====================================
*/

export const getHistory = async () => {
  const token = localStorage.getItem("token");

  const { data } = await API.get(
    "/travel/history",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/*
====================================
Get Single Trip
====================================
*/

export const getTripById = async (id) => {
  const token = localStorage.getItem("token");

  const { data } = await API.get(
    `/travel/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/*
====================================
Delete Trip
====================================
*/

export const deleteTrip = async (id) => {
  const token = localStorage.getItem("token");

  const { data } = await API.delete(
    `/travel/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/*
====================================
Favorite Trip
====================================
*/

export const toggleFavorite = async (tripId) => {
  const token = localStorage.getItem("token");

  const { data } = await API.patch(
    `/travel/${tripId}/favorite`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

/*
====================================
Favorite Trips
====================================
*/

export const getFavoriteTrips = async () => {
  const token = localStorage.getItem("token");

  const { data } = await API.get(
    "/travel/favorites",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};