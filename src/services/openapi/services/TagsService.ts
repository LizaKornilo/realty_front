/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTagDto } from '../models/CreateTagDto';
import type { Tag } from '../models/Tag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * @param requestBody
     * @returns Tag
     * @throws ApiError
     */
    public static tagControllerCreateOne(
        requestBody: CreateTagDto,
    ): CancelablePromise<Tag> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Tag
     * @throws ApiError
     */
    public static tagControllerReadAll(): CancelablePromise<Array<Tag>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
        });
    }

}
