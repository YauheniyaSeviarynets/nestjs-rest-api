import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    create(createCartDto: CreateCartDto): Promise<{
        id: string;
    }>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<{
        id: any;
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
    remove(id: string): Promise<void>;
}
