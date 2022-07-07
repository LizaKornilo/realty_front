/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDwellingDto = {
    name: string;
    price: number;
    image: Blob;
    /**
     * array converted to a JSON string
     */
    tagIds: string;
    streetId: number;
};

