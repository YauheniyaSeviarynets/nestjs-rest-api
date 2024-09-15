import { SystemService } from './system.service';
export declare class SystemController {
    private systemService;
    constructor(systemService: SystemService);
    updateIndexes(): Promise<PromiseSettledResult<void>[]>;
}
