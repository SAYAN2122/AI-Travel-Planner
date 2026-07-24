import api from "./api";

export const getHistory = async () => {
  const response = await api.get("/travel/history");
  return response.data.data;
};

export const deleteTrip = async (id) => {
  const response = await api.delete(`/travel/${id}`);
  return response.data;
};

export const updateTrip = async (id, data) => {
  const response = await api.put(`/travel/${id}`, data);
  return response.data.data;
};