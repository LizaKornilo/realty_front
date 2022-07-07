/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SearchDto = {
    minPrice?: number;
    maxPrice?: number;
    /**
     * Number of days
     */
    updatePeriod?: number;
    countryId?: number;
    cityId?: number;
    streetId?: number;
};

