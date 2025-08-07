// hais-frontend/src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://localhost:5001/api', // match your backend
});
