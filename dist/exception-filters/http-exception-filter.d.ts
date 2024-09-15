import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { BaseException } from '../exceptions/BaseException';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private exceptionsMap;
    private response;
    catch(exception: BaseException, host: ArgumentsHost): void;
}
