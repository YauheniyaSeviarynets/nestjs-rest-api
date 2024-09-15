import { DatabaseCoreModule, DatabaseOptions } from './database-core.module';
export declare class DatabaseModule {
    static forRoot(options: DatabaseOptions): {
        module: typeof DatabaseModule;
        imports: {
            module: typeof DatabaseCoreModule;
            providers: {
                provide: import("./constants").DatabaseProviderValues;
                useFactory: () => Promise<void>;
            }[];
            exports: {
                provide: import("./constants").DatabaseProviderValues;
                useFactory: () => Promise<void>;
            }[];
        }[];
    };
}
