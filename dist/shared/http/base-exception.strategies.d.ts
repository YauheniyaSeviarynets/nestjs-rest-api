import { BadRequestException } from '../../exceptions/BadRequestException';
export declare const BASE_EXCEPTION_STRATEGIES: Readonly<{
    PROVIDED_ID_INVALID: () => BadRequestException;
}>;
export declare const BASE_EXCEPTION_STRATEGIES_KEYS: Record<"PROVIDED_ID_INVALID", "PROVIDED_ID_INVALID">;
