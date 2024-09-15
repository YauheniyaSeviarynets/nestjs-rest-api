import { DatabaseProviderValues } from './constants';
export interface DatabaseOptions {
    localEndpoint?: string | boolean;
    accessKey?: string;
    secretKey?: string;
    region?: string;
}
export declare class DatabaseCoreModule {
    static forRoot(options: DatabaseOptions): {
        module: typeof DatabaseCoreModule;
        providers: {
            provide: DatabaseProviderValues;
            useFactory: () => Promise<void>;
        }[];
        exports: {
            provide: DatabaseProviderValues;
            useFactory: () => Promise<void>;
        }[];
    };
}
