import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://gaming-ecommerce-backend.onrender.com',
  withCredentials: true,
})
