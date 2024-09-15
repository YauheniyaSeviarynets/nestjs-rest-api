import { ResponseEntity } from '../types/types';
export interface ListingResponseOptions<Entity, OutputEntity = unknown> {
    itemMapper?: (item: Entity) => OutputEntity;
    lastReadItemId?: string;
}
export declare class ListingResponse<Entity, OutputEntity = unknown> implements ResponseEntity {
    private readonly items;
    private readonly total;
    private readonly itemMapper;
    private readonly lastReadItemId;
    constructor(items: Entity[], total: number, options?: ListingResponseOptions<Entity, OutputEntity>);
    private mapItems;
    getJSON(): {
        items: Entity[] | OutputEntity[];
        total: number;
        lastReadItemId: string;
    };
}
