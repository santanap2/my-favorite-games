import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export const api = axios.create({
  baseURL:
    process.env.API_URL || 'https://gaming-ecommerce-backend.onrender.com',
  withCredentials: true,
})
