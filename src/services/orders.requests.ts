import { IPaymentData } from '@/interfaces'
import { api } from '.'

export const getUserOrders = async (queryParams?: string) => {
  const result = await api.get(`/get-orders?${queryParams}`)
  return result
}

export const createOrder = async (data: IPaymentData) => {
  const result = await api.post('/create-order', { data })
  return result
}
