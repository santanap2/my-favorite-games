import { ICreateEvaluation, IEvaluationUpdate } from '@/interfaces'
import { api } from '.'

export const getUserEvaluations = async (email: string) => {
  const result = await api.get(`/get-user-evaluations?email=${email}`)
  return result
}

export const getOneUserEvaluation = async ({
  email,
  evaluationId,
}: {
  email: string
  evaluationId: string
}) => {
  const result = await api.get(
    `/get-user-evaluation/${evaluationId}?email=${email}`,
  )
  return result
}

export const updateEvaluation = async ({
  evaluationUpdate,
  email,
}: {
  email: string
  evaluationUpdate: IEvaluationUpdate
}) => {
  console.log(email)
  const result = await api.put('/update-evaluation', {
    email,
    evaluationUpdate,
  })
  return result
}

export const createEvaluation = async ({
  evaluation,
  email,
}: {
  evaluation: ICreateEvaluation
  email: string
}) => {
  const result = await api.post('/add-evaluation', { evaluation, email })
  return result
}
