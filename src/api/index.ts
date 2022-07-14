import { AppService, DwellingsService, OpenAPI } from '../services/openapi'
import {getToken, setToken} from './token.service'

OpenAPI.BASE = 'http://localhost:5000'
OpenAPI.WITH_CREDENTIALS = true
OpenAPI.TOKEN = getToken() || undefined

function responseInterceptor <T extends (...args: any)=>any> (func: T): (...args:Parameters<T>)=>Promise<any> {
  return async function (...args: Parameters<T>[]) {
    try {
      return await func(...args)
    } catch (e: any) {
      if (e.status === 401) {
        try {
          const newAccessToken = await AppService.appControllerGenerateNewAccessToken()
          setToken(newAccessToken)
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
