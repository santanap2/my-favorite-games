import axios from 'axios'

export const apiInstanceWithHeaders = (token: string) => {
  const api = axios.create({
    baseURL: 'http://localhost:3003',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  return api
}

export const api = axios.create({
  baseURL: 'http://localhost:3003',
})
