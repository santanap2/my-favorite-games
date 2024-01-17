import { IEvaluationUpdate } from '@/interfaces'
import { api } from '.'

export const getUserEvaluations = async () => {
  const result = await api.get('/get-user-evaluations')
  return result
}

export const getOneUserEvaluation = async (evaluationId: string) => {
  const result = await api.get(`/get-user-evaluation/${evaluationId}`)
  return result
}

export const updateEvaluation = async (evaluationUpdate: IEvaluationUpdate) => {
  const result = await api.put('/update-evaluation', evaluationUpdate)
  return result
}
