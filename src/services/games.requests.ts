import { api } from './api'

export const getGamesFiltered = async (queryParams?: string) => {
  const result = await api.get(`/get-games?${queryParams}`)
  return result
}
