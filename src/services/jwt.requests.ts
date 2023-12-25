import { api } from './api'
import * as jwt from 'jsonwebtoken'

export const setTokenToHeaders = (token: string) =>
  (api.defaults.headers.common.Authorization = token)

export const removeTokenFromHeaders = () =>
  delete api.defaults.headers.common.Authorization

export const decodeToken = (token: string) => {
  const result = jwt.decode(token)
  return result
}
