import axios from "axios";
import { API_ADMIN_URL } from "../config/Environment";

const http = axios.create({
  baseURL: API_ADMIN_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      ...config.headers,
    };
    if (localStorage.access_token) {
      config.headers.Authorization = `Bearer ${localStorage.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export { http };
