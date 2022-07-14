/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Roles } from './Roles';
import type { User } from './User';

export type Role = {
    id: number;
    value: Roles;
    users: Array<User>;
};

