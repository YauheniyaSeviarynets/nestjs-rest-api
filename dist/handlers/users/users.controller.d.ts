import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findOne(id: string): Promise<Partial<Partial<import("./users.model").ProtectedUser>> & {
        itemId: any;
    }>;
    findAll(lastReadItemId: string, pageSize: string): Promise<{
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
