import { ICreateEvaluation, IEvaluationUpdate } from '@/interfaces'
import { api } from '.'

export const getUserEvaluations = async (email: string) => {
  const result = await api.get(`/get-user-evaluations?email=${email}`)
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

export const createEvaluation = async (createEvaluation: ICreateEvaluation) => {
  const result = await api.post('/add-evaluation', createEvaluation)
  return result
}
