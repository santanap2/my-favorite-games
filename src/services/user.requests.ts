import { IRegister, IUpdateUserData, IUser } from '@/interfaces'
import { api } from './api'

export const registerUser = async (data: IRegister) => {
  const result = await api.post('/register', data)
  return result
}

export const updateUser = async (data: IUpdateUserData) => {
  const result = await api.put('/update-user', data)
  return result
}

export const getUser = async (id: number) => {
  const result = await api.get(`/get-user/${id}`)
  return result
}

export const getUserByEmail = async (email: string) => {
  const result = await api.get(`/get-user-by-email/${email}`)
  return result
}

export const requestLogin = async ({ email, password }: IUser) => {
  const result = await api.post('/login', { email, password })
  return result
}