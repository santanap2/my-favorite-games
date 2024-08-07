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
  id: string
  email: string
}) => {
  const result = await api.get(`/get-order/${id}?email=${email}`)
  return result
}

export const createOrder = async ({
  email,
  paymentMethod,
  cardData,
}: IPaymentData) => {
  const result = await api.post(`/create-order`, {
    paymentMethod,
    cardData,
    email,
  })
  return result
}

export const getBoughtProducts = async (email: string) => {
  const result = await api.get(`/get-bought-products?email=${email}`)
  return result
}
