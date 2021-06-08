import axios from "axios";
import { API_URL } from "config/Environment";

const auth = axios.create({
  baseURL: `${API_URL}/api/ima/v1`,
});

const http = axios.create({
  baseURL: `${API_URL}/api/proxy/v1/ima`,
  headers: {
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("IMA_accessToken")) {
      config.headers.Authorization = `Bearer ${localStorage.IMA_accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorMessage = error.response.data.message;
    if (errorMessage.includes("status code 401")) {
      const origin = window.location.origin;
      const url = origin + "/api/reparation";
      window.location.href = url;
    }
    return Promise.reject(error);
  }
);

export { http, auth, api };
