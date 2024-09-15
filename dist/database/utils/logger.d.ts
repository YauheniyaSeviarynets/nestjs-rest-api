declare class Logger implements Partial<Console> {
    info({ message }: {
        message: any;
    }): void;
    error({ message }: {
        message: any;
    }): void;
    log({ message }: {
        message: any;
    }): void;
}
export declare const logger: Logger;
export {};
