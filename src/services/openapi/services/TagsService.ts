/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagDto } from '../models/CreateTagDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static tagControllerCreateOne(
        requestBody: CreateTagDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static tagControllerReadAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
        });
    }

}
