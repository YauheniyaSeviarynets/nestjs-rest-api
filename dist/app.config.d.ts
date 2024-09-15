declare type MetaData = {
    port: number;
    [x: string]: string | number | boolean;
};
export interface DatabaseOptions {
    accessKey: string;
    secretKey: string;
    region?: string;
    localDatabaseEndpoint: false | string;
    tableAutoCreate: boolean;
    tableAutoUpdate: boolean;
}
export interface Config {
    databaseOptions: DatabaseOptions;
    metaData: MetaData;
    serviceName: string;
    serviceVersion: string;
}
declare class AppConfig {
    private static instance;
    private readonly config;
    constructor();
    setDatabaseOptions(options: Config['databaseOptions']): AppConfig;
    setMetaData(options: Config['metaData']): AppConfig;
    setServiceName(name: Config['serviceName']): AppConfig;
    setServiceVersion(version: Config['serviceVersion']): AppConfig;
    build(): Config;
}
export default AppConfig;
