import { SchemaDefinition } from 'dynamoose/dist/Schema';
import { Model } from 'dynamoose/dist/Model';
import { AnyItem } from 'dynamoose/dist/Item';
export declare abstract class BaseRepository<Entity extends AnyItem> {
    protected schema: SchemaDefinition;
    protected entityName: string;
    protected model: Model<Entity>;
    requestTable(): import("dynamoose/dist/Table").Table;
    getModel(): Model<Entity>;
    protected constructor(entityName: string, schema: SchemaDefinition);
    private createRepository;
    updateTableIndexes(): Promise<void>;
}
