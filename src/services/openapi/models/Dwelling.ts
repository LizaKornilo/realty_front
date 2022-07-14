/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Street } from './Street';
import type { Tag } from './Tag';
import type { User } from './User';

export type Dwelling = {
    id: number;
    name: string;
    price: number;
    image_path: string;
    created_at: string;
    updated_at: string;
    street: Street;
    is_active: boolean;
    tags: Array<Tag>;
    owner: User;
};

