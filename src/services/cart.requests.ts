import { api } from './api'

export const addItemToCart = async (gameId: string) => {
  const result = await api.post('/add-to-cart', { gameId })
  return result
}

export const buyOneItem = async (gameId: string) => {
  const result = await api.put('/buy-one-item', { gameId })
  return result
}

export const getUserCart = async () => {
  const result = await api.get('/get-user-cart')
  return result
}

export const removeItemFromCart = async (gameId: string) => {
  const result = await api.put('/remove-from-cart', { gameId })
  return result
}

export const emptyCart = async () => {
  const result = await api.put('/empty-cart')
  return result
}
