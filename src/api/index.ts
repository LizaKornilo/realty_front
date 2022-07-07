import { AppService, DwellingsService, OpenAPI } from '../services/openapi'

OpenAPI.BASE = 'http://localhost:5000'
OpenAPI.WITH_CREDENTIALS = true
OpenAPI.TOKEN = localStorage.getItem('token') || undefined

function responseInterceptor <T extends (...args: any)=>any> (func: T): (...args:Parameters<T>)=>Promise<any> {
  return async function (...args: Parameters<T>[]) {
    try {
      return await func(...args)
    } catch (e: any) {
      if (e.status === 401) {
        try {
          const newAccessToken = await AppService.appControllerGenerateNewAccessToken()
          localStorage.setItem('token', newAccessToken)
          OpenAPI.TOKEN = newAccessToken
          return await func(...args)
        } catch (e) {
          console.log('UNAUTHORIZED!')
        }
      }
      throw e
    }
  }
}

export const appControllerGetHelloForEveryone = responseInterceptor(AppService.appControllerGetHelloForEveryone)
export const appControllerGetHelloForLogined = responseInterceptor(AppService.appControllerGetHelloForLogined)
export const dwellingControllerReadOne = responseInterceptor(DwellingsService.dwellingControllerReadOne)
