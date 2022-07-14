const TOKEN_KEY = 'token'

export interface ITokenPayload {
    username: string,
    email: string,
    sub: number,
    role: {
        id: number,
        value: string
    },
    iat: number,
    exp: number
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const setToken = (value: string) => {
  localStorage.setItem(TOKEN_KEY, value)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const getTokenPayload = (): ITokenPayload | null => {
  const token = getToken()
  if (!token) return null
  return decodeToken(token)
}

const decodeToken = (token: string): ITokenPayload | null => {
  try {
    const base64Url = token!.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  } catch (e) {
    return null
  }
}
