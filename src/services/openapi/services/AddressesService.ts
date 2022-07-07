/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAddressDto } from '../models/CreateAddressDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AddressesService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static addressControllerCreateAddress(
        requestBody: CreateAddressDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/addresses',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
