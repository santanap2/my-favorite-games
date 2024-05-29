import axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export const api = axios.create({
  baseURL: 'http://localhost:3003',
  // baseURL: process.env.API_URL,
  withCredentials: true,
})
