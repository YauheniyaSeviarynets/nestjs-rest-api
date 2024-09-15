import { BaseRepository } from '../../database/base.repository';
import { User } from './users.model';
import { AnyItem } from 'dynamoose/dist/Item';
export declare class UsersRepositoryService extends BaseRepository<User & AnyItem> {
    constructor();
}
