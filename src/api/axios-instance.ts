import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // Set your API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Optional: Add interceptors for auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // or use any token service
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🛑 Optional: Global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can auto-logout or handle 401 globally here
    return Promise.reject(error);
  }
);

export default api;
