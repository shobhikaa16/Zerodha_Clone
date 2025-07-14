import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://zerodha-backend-c8sc.onrender.com/',
  withCredentials: true, // important for cookie-based auth
});

export default axiosInstance;
