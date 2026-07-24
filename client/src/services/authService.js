import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/*
====================================
Signup
====================================
*/

export const signup = async (userData) => {
  const { data } = await API.post("/auth/signup", userData);
  return data;
};

/*
====================================
Login
====================================
*/

export const login = async (userData) => {
  const { data } = await API.post("/auth/login", userData);
  return data;
};

/*
====================================
Get Profile
====================================
*/

export const getProfile = async (token) => {
  const { data } = await API.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

/*
====================================
Update Profile
====================================
*/

export const updateProfile = async (profileData) => {
  const token = localStorage.getItem("token");

  const { data } = await API.put(
    "/auth/profile",
    profileData,
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
Change Password
====================================
*/

export const changePassword = async (
  token,
  passwordData
) => {
  const { data } = await API.put(
    "/auth/change-password",
    passwordData,
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
Delete Account
====================================
*/

export const deleteAccount = async (token) => {
  const { data } = await API.delete(
    "/auth/delete-account",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};