/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dwelling } from './Dwelling';
import type { Order } from './Order';
import type { Role } from './Role';

export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    activationKey: string;
    is_activated: boolean;
    orders: Array<Order>;
    dwellings: Array<Dwelling>;
    role: Role;
};

