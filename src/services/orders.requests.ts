import { api } from '.'

export const getUserOrders = async () => {
  const result = await api.get('/get-orders')
  return result
}
