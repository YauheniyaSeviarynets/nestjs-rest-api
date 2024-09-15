import { BaseException } from './BaseException';
export declare class NotFoundException extends BaseException {
    status: number;
    constructor(...args: any[]);
}
