import { IUpdateUserData, IUser } from '@/interfaces'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3003',
})

export const registerUser = async (data: IUser) => {
  const result = await api.post('/register', data)
  return result
}

export const updateUser = async (data: IUpdateUserData) => {
  const result = await api.put('/update-user', data)
  return result
}

export const getUser = async (email: string) => {
  const result = await api.get(`/get-user/${email}`)
  return result
}
