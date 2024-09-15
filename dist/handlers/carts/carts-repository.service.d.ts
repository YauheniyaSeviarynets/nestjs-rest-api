import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UsersRepositoryService } from '../users/users-repository.service';
export declare class CartsRepositoryService {
    private userRepositoryService;
    constructor(userRepositoryService: UsersRepositoryService);
    get model(): import("dynamoose/dist/Model").Model<Partial<import("../users/users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>;
    create(createCartDto: CreateCartDto): Promise<Partial<import("../users/users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>;
    findAll(): Promise<import("dynamoose/dist/ItemRetriever").ScanResponse<Partial<import("../users/users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>>;
    findOne(id: string): Promise<Partial<import("../users/users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<Partial<import("../users/users.model").ProtectedUser> & import("dynamoose/dist/Item").AnyItem>;
    remove(id: string): Promise<void>;
}
