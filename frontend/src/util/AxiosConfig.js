import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // uses .env backend URL
  withCredentials: true, // important for cookie-based auth
});

export default axiosInstance;
