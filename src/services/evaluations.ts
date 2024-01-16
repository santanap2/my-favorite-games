import { api } from '.'

export const getUserEvaluations = async () => {
  const result = await api.get('/get-user-evaluations')
  return result
}

export const getOneUserEvaluation = async (evaluationId: string) => {
  const result = await api.get(`/get-user-evaluation/${evaluationId}`)
  return result
}
