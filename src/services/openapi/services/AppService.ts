/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthDto } from '../models/AuthDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AppService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static appControllerLogin(
        requestBody: AuthDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static appControllerGenerateNewAccessToken(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/generate-new-access-token',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetHelloForEveryone(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-hello-for-everyone',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetHelloForLogined(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-hello-for-logined',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static appControllerGetAdminHello(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get-hello-for-admin',
        });
    }

}
