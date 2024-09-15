import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepositoryService } from './users-repository.service';
export declare class UsersService {
    private userRepositoryService;
    constructor(userRepositoryService: UsersRepositoryService);
    get model(): import("dynamoose/dist/Model").Model<Partial<import("./users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>;
    findOne(id: string): Promise<Partial<Partial<import("./users.model").ProtectedUser>> & {
        itemId: any;
    }>;
    findAll(lastReadItemId: string, pageSize: number): Promise<{
        items: Partial<import("./users.model").ProtectedUser>[] | (Partial<Partial<import("./users.model").ProtectedUser>> & {
            itemId: any;
        })[];
        total: number;
        lastReadItemId: string;
    }>;
    create(createDto: CreateUserDto): Promise<{
        id: string;
    }>;
}
