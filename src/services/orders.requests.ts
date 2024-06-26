import { IPaymentData } from '@/interfaces'
import { api } from '.'

export const getUserOrders = async (email: string, queryParams?: string) => {
  const result = await api.get(`/get-orders?email=${email}&${queryParams}`)
  return result
}

export const getOneUserOrder = async ({
  id,
  email,
}: {
  email: string
  id: string
}) => {
  const result = await api.get(`/get-order/${id}?email=${email}`)
  return result
}

export const createOrder = async (data: IPaymentData) => {
  const result = await api.post('/create-order', { data })
  return result
}

export const getBoughtProducts = async (email: string) => {
  const result = await api.get(`/get-bought-products?email=${email}`)
  return result
}
