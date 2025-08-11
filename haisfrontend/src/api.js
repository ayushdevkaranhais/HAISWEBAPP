import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5079', // Use HTTP for local development
})