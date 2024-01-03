import { api } from './api'

export const addItemToFavorites = async (gameId: string) => {
  const result = await api.post('/add-to-favorites', { gameId })
  return result
}

export const getAllFavorites = async () => {
  const result = await api.get('/get-all-favorites')
  return result
}
