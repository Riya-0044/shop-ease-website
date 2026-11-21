/*import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;*/

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach the logged-in user's token (if present) to every request automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;