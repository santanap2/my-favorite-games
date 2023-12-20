import { IUser } from '@/interfaces'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3003',
})

export const registerUser = async (data: IUser) => {
  const result = await api.post('/register', data)
  return result
}
