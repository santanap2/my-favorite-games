import { api } from '.'

export const getUserEvaluations = async () => {
  const result = await api.get('/get-user-evaluations')
  return result
}
