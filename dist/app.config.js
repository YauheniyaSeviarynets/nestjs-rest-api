"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_helper_1 = require("./shared/types/types.helper");
const dotenv = require("dotenv");
dotenv.config();
const RAW_ENV_VARIABLES = Object.freeze({
    PUBLIC_ACCESS_KEY: process.env.PUBLIC_ACCESS_KEY,
    PRIVATE_ACCESS_KEY: process.env.PRIVATE_ACCESS_KEY,
    REGION: process.env.REGION,
    LOCAL_DATABASE_ENDPOINT: process.env.LOCAL_DATABASE_ENDPOINT,
    TABLE_AUTOCREATE: process.env.TABLE_AUTOCREATE,
    TABLE_AUTOUPDATE: process.env.TABLE_AUTOUPDATE,
    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.npm_package_version,
    DEVELOPMENT: process.env.DEVELOPMENT,
    PORT: process.env.PORT,
});
class AppConfig {
    constructor() {
        if ((0, types_helper_1.isObject)(AppConfig.instance)) {
            return AppConfig.instance;
        }
        this.config = {
            databaseOptions: null,
            metaData: null,
            serviceName: null,
            serviceVersion: null,
        };
        AppConfig.instance = this;
        return AppConfig.instance;
    }
    setDatabaseOptions(options) {
        const instance = AppConfig.instance;
        if ((0, types_helper_1.isObject)(instance.config.databaseOptions)) {
            throw new Error('databaseOptions must be set once');
        }
        instance.config.databaseOptions = Object.assign({}, options);
        return instance;
    }
    setMetaData(options) {
        const instance = AppConfig.instance;
        if ((0, types_helper_1.isObject)(instance.config.metaData)) {
            throw new Error('metaData must be set once');
        }
        instance.config.metaData = Object.assign({}, options);
        return instance;
    }
    setServiceName(name) {
        const instance = AppConfig.instance;
        if ((0, types_helper_1.isString)(instance.config.serviceVersion)) {
            throw new Error('serviceName must be set once');
        }
        instance.config.serviceName = name;
        return instance;
    }
    setServiceVersion(version) {
        const instance = AppConfig.instance;
        if ((0, types_helper_1.isString)(instance.config.serviceVersion)) {
            throw new Error('serviceVersion must be set once');
        }
        instance.config.serviceVersion = version;
        return instance;
    }
    build() {
        return AppConfig.instance.config;
    }
}
new AppConfig()
    .setServiceName(RAW_ENV_VARIABLES.APP_NAME)
    .setServiceVersion(RAW_ENV_VARIABLES.APP_VERSION)
    .setDatabaseOptions({
    accessKey: RAW_ENV_VARIABLES.PUBLIC_ACCESS_KEY,
    secretKey: RAW_ENV_VARIABLES.PRIVATE_ACCESS_KEY,
    region: RAW_ENV_VARIABLES.REGION,
    localDatabaseEndpoint: RAW_ENV_VARIABLES.LOCAL_DATABASE_ENDPOINT || false,
    tableAutoCreate: RAW_ENV_VARIABLES.TABLE_AUTOCREATE === 'true',
    tableAutoUpdate: RAW_ENV_VARIABLES.TABLE_AUTOUPDATE === 'true',
})
    .setMetaData({
    isDevelopment: RAW_ENV_VARIABLES.DEVELOPMENT === 'true',
    port: parseInt(RAW_ENV_VARIABLES.PORT) || 3000,
});
console.info('App config', new AppConfig().build());
exports.default = AppConfig;
//# sourceMappingURL=app.config.js.map