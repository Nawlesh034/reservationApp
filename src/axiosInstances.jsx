import axios from 'axios';

// Create an Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: "https://reservation-appbackend.vercel.app", // Replace with your backend URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});



export default axiosInstance;
