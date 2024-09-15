import { NotFoundException } from '../../exceptions/NotFoundException';
export declare const USERS_EXCEPTION_STRATEGIES: Readonly<{
    USER_NOT_FOUND: () => NotFoundException;
}>;
export declare const USERS_EXCEPTION_STRATEGIES_KEYS: Record<"USER_NOT_FOUND", "USER_NOT_FOUND">;
