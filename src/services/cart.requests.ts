import { api } from './api'
import { IPayloadJWT } from '@/interfaces'
import { decodeToken } from '.'

export const addItemToCart = async (token: string, gameId: string) => {
  const { id } = decodeToken(token) as IPayloadJWT
  const result = await api.post(`/add-to-cart/${id}`, { gameId })
  return result
}

export const buyOneItem = async (token: string, gameId: string) => {
  const { id } = decodeToken(token) as IPayloadJWT
  const result = await api.put(`/buy-one-item/${id}`, { gameId })
  return result
}

export const getUserCart = async (token: string) => {
  const { id } = decodeToken(token) as IPayloadJWT
  const result = await api.get(`/get-user-cart/${id}`)
  return result
}

export const removeItemFromCart = async (token: string, gameId: string) => {
  const { id } = decodeToken(token) as IPayloadJWT
  const result = await api.put(`/remove-from-cart/${id}`, { gameId })
  return result
}

export const emptyCart = async (token: string) => {
  const { id } = decodeToken(token) as IPayloadJWT
  const result = await api.put(`/empty-cart/${id}`)
  return result
}
