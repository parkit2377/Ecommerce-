import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.29.130:3000',
  // baseURL: 'http://192.168.29.49:3000' ,
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default api;