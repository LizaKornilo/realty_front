/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dwelling } from './Dwelling';
import type { User } from './User';

export type Order = {
    id: number;
    start_date: string;
    end_date: string;
    user: User;
    dwelling: Dwelling;
};

