import { BaseModel } from '../../shared/base-model/base-model.model';
import { Cart } from '../carts/carts.model';
export declare type UserKey = {
    userId: string;
    relationKey: string;
};
declare type UserRelations = {
    createdAt?: string;
} & Cart;
export interface ProtectedUser extends UserKey, UserRelations {
    name: string;
    email: string;
}
export declare type User = Partial<ProtectedUser>;
export declare class UserModel extends BaseModel<User> {
    get id(): string;
}
export {};
