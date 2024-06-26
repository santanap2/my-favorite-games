import { api } from './api'

export const addItemToFavorites = async ({
  gameId,
  email,
}: {
  gameId: string
  email: string
}) => {
  const result = await api.put('/add-or-remove-favorite', { gameId, email })
  return result
}

export const getAllFavorites = async (email: string) => {
  const result = await api.get(`/get-all-favorites?email=${email}`)
  return result
}
