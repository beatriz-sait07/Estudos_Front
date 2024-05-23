// src/plugins/axios.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json', //especifica que ele nao eh um modulo
  },
});

export default apiClient;
