/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dwelling } from './Dwelling';

export type Tag = {
    id: number;
    value: string;
    dwellings: Array<Dwelling>;
};

