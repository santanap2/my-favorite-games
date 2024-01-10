import { api } from '.'

export const getCategories = async () => {
  const result = await api.get('/get-categories')
  return result
}
