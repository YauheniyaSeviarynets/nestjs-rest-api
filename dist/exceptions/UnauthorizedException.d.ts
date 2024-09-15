import { BaseException } from './BaseException';
export declare class UnauthorizedException extends BaseException {
    status: number;
    constructor(...args: any[]);
}
