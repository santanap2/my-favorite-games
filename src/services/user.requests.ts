import { IRegister, IUpdateUserData, IUser } from '@/interfaces'
import { api } from './api'

export const getUserByEmail = async (email?: string | null) => {
  const result = await api.get(`/get-user-by-email/${email}`)
  return result
}

export const registerUser = async (data: IRegister) => {
  const result = await api.post('/register', data)
  return result
}

export const updateUser = async ({
  userData,
  userEmail,
}: {
  userData: IUpdateUserData
  userEmail: string
}) => {
  const result = await api.put('/update-user', { userData, userEmail })
  return result
}

export const requestLogin = async ({ email, password }: IUser) => {
  const result = await api.post('/login', { email, password })
  return result
}
