import { api } from './api'

export const getGamesFiltered = async (queryParams?: string) => {
  const result = await api.get(`/get-games?${queryParams}`)
  return result
}

export const getGame = async (id: string) => {
  const result = await api.get(`get-game/${id}`)
  return result
}
