import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5001/api",

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
  },
});

/*
====================================
Request Interceptor
====================================
*/

api.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("token");

    if (token) {

      config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

  },

  (error) => Promise.reject(error)

);

/*
====================================
Response Interceptor
====================================
*/

api.interceptors.response.use(

  (response) => response,

  (error) => {

    if (error.response) {

      switch (error.response.status) {

        case 401:

          localStorage.removeItem("token");

          if (
            window.location.pathname !== "/login"
          ) {

            window.location.href = "/login";

          }

          break;

        case 403:

          console.error("Access Forbidden");

          break;

        case 404:

          console.error("Resource Not Found");

          break;

        case 429:

          console.error("Too many requests");

          break;

        case 500:

          console.error("Internal Server Error");

          break;

        default:

          break;

      }

    }

    return Promise.reject(error);

  }

);

export default api;