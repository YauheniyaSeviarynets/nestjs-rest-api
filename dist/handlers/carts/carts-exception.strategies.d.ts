import { NotFoundException } from '../../exceptions/NotFoundException';
import { BadRequestException } from '../../exceptions/BadRequestException';
export declare const CARTS_EXCEPTION_STRATEGIES: Readonly<{
    CART_NOT_FOUND: () => NotFoundException;
    SUCH_CART_ALREADY_EXIST: () => BadRequestException;
}>;
export declare const CARTS_EXCEPTION_STRATEGIES_KEYS: Record<"CART_NOT_FOUND" | "SUCH_CART_ALREADY_EXIST", "CART_NOT_FOUND" | "SUCH_CART_ALREADY_EXIST">;
