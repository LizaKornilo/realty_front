/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { City } from './City';
import type { Dwelling } from './Dwelling';

export type Street = {
    id: number;
    value: string;
    city: City;
    dwellings: Array<Dwelling>;
};

