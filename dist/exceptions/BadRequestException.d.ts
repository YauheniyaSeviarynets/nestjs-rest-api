import { BaseException } from './BaseException';
export declare class BadRequestException extends BaseException {
    status: number;
    constructor(...args: any[]);
}
