/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDwellingDto } from '../models/CreateDwellingDto';
import type { Dwelling } from '../models/Dwelling';
import type { SearchDto } from '../models/SearchDto';
import type { UpdateDwellingDto } from '../models/UpdateDwellingDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DwellingsService {

    /**
     * @param formData
     * @returns Dwelling
     * @throws ApiError
     */
    public static dwellingControllerCreateOne(
        formData: CreateDwellingDto,
    ): CancelablePromise<Dwelling> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dwellings',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @returns Dwelling
     * @throws ApiError
     */
    public static dwellingControllerReadAll(): CancelablePromise<Array<Dwelling>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dwellings',
        });
    }

    /**
     * @param id
     * @returns Dwelling
     * @throws ApiError
     */
    public static dwellingControllerReadOne(
        id: number,
    ): CancelablePromise<Dwelling> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dwellings/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param formData
     * @returns Dwelling
     * @throws ApiError
     */
    public static dwellingControllerUpdateOne(
        id: number,
        formData: UpdateDwellingDto,
    ): CancelablePromise<Dwelling> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/dwellings/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static dwellingControllerDeleteOne(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dwellings/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Dwelling
     * @throws ApiError
     */
    public static dwellingControllerSearch(
        requestBody: SearchDto,
    ): CancelablePromise<Array<Dwelling>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dwellings/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
