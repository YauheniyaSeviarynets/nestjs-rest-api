import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartsRepositoryService } from './carts-repository.service';
import { UsersService } from '../users/users.service';
export declare class CartsService {
    private cartsRepositoryService;
    private usersService;
    constructor(cartsRepositoryService: CartsRepositoryService, usersService: UsersService);
    create(createCartDto: CreateCartDto): Promise<{
        id: string;
    }>;
    findAll(): Promise<{
        items: Partial<import("../users/users.model").ProtectedUser>[] | (Partial<Partial<import("../users/users.model").ProtectedUser>> & {
            itemId: any;
        })[];
        total: number;
        lastReadItemId: string;
    }>;
    findOne(id: string): Promise<Partial<Partial<import("../users/users.model").ProtectedUser>> & {
        itemId: any;
    }>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<{
        id: any;
    }>;
    remove(id: string): Promise<void>;
}
