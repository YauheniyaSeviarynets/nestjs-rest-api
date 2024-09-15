import { ResponseEntity } from '../types/types';
export declare class BaseModel<Entity> implements ResponseEntity {
    entity: Partial<Entity>;
    constructor(entity: Partial<Entity>);
    get id(): any;
    getJSON(ignoreFields?: string[]): Partial<Entity> & {
        itemId: any;
    };
}
