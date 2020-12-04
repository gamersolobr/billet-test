import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.boletobancario.com/api-integration'
});

export default api;