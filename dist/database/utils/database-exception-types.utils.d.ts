declare type DatabaseException = {
    __type: string | undefined;
};
export declare const getDatabaseExceptionType: <Error_1 extends DatabaseException>(error: Error_1) => string | undefined;
export declare const getIsConditionalCheckFailedException: <Error_1 extends DatabaseException>(error: Error_1) => boolean;
export {};
