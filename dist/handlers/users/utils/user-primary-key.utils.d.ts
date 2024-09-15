import { UserKey } from '../users.model';
export declare const ID_DIVIDER = "_";
export declare const parseUserPrimaryKey: (id: string) => UserKey;
export declare const getUserPrimaryKey: (userId: string, relationKey: string) => string;
