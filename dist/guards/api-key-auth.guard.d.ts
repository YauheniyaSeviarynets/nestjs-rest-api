import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare const AUTH_HEADER = "x-api-key";
export declare const SECRET_AUTH_KEY = "secret";
export declare class ApiKeyAuthGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
