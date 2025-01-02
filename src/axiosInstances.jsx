import axios from 'axios';

// Create an Axios instance with base URL
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your backend URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request and response interceptors if needed
// axiosInstance.interceptors.request.use((config) => {
//   // Add any token or modify the request headers if necessary
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
