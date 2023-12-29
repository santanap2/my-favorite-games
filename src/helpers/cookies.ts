import { parseCookies, destroyCookie } from 'nookies'

export const logoutAuthCookie = () => {
  destroyCookie(null, 'gamingPlatform-Auth')
}

export const getAuthCookie = () => {
  const { 'gamingPlatform-Auth': token } = parseCookies()
  return token
}
