"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const dynamoose_1 = require("dynamoose");
const app_config_1 = require("../app.config");
const Internal_1 = require("dynamoose/dist/Internal");
const Table_1 = require("dynamoose/dist/Table");
const utilities_1 = require("dynamoose/dist/Table/utilities");
const TABLE_KEY = Internal_1.default.General.internalProperties;
class BaseRepository {
    constructor(entityName, schema) {
        this.entityName = entityName;
        this.schema = schema;
        this.model = this.createRepository();
    }
    requestTable() {
        return this.model.table();
    }
    getModel() {
        return this.model;
    }
    createRepository() {
        const { databaseOptions, serviceName } = new app_config_1.default().build();
        return (0, dynamoose_1.model)(this.entityName, this.schema, {
            create: databaseOptions.tableAutoCreate,
            prefix: `${serviceName || 'Service'}-`,
            suffix: '-Table',
            update: databaseOptions.tableAutoUpdate,
        });
    }
    async updateTableIndexes() {
        const table = this.requestTable();
        const defaultConfig = table.getInternalProperties(TABLE_KEY);
        const newOptions = Object.assign(Object.assign({}, defaultConfig.options), { update: [Table_1.TableUpdateOptions.indexes] });
        table.setInternalProperties(TABLE_KEY, Object.assign(Object.assign({}, defaultConfig), { options: newOptions }));
        try {
            await (0, utilities_1.updateTable)(table);
        }
        catch (e) {
            console.error(`An error occurred while table updating: ${e.message || '-'}`);
        }
        finally {
            table.setInternalProperties(TABLE_KEY, defaultConfig);
        }
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map