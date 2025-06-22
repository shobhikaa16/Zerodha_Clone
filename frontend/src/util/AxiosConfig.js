import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002',
  withCredentials: true, // important for cookie-based auth
});

export default axiosInstance;
