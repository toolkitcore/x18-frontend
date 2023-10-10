import axios from "axios";

// const BASE_URL = "https://x18-webrecruiter.onrender.com/api/v1";
const BASE_URL = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, //over 5 minutes stop calling
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  
  if (accessToken) {
    config.headers["access-token"] = accessToken;
  }
  return config;
});

export default axiosInstance;
