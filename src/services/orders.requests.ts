import { api } from '.'

export const getUserOrders = async (queryParams?: string) => {
  const result = await api.get(`/get-orders?${queryParams}`)
  return result
}
