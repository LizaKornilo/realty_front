/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterReqDto } from '../models/RegisterReqDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static userControllerRegister(
        requestBody: RegisterReqDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
