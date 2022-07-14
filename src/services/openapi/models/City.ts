/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { Street } from './Street';

export type City = {
    id: number;
    value: string;
    country: Country;
    streets: Array<Street>;
};

