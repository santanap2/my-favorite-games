import { IUpdateUserData, IRegister, IUser } from '@/interfaces'
import axios from 'axios'
import * as jwt from 'jsonwebtoken'

export const api = axios.create({
  baseURL: 'http://localhost:3003',
})

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

export const setTokenToHeaders = (token: string) =>
  (api.defaults.headers.common.Authorization = token)

export const removeTokenFromHeaders = () =>
  delete api.defaults.headers.common.Authorization

export const decodeToken = (token: string) => {
  const result = jwt.decode(token)
  return result
}

export const getGamesFiltered = async (queryParams?: string) => {
  const result = await api.get(`/get-games?${queryParams}`)
  return result
}
