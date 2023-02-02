import { User } from '../entities/user';

export abstract class UserRepository {
    abstract createUser(user: User): Promise<void>;
    abstract updateUser(user: User): Promise<User>;
    abstract deleteUser(userID: string): Promise<void>;
    abstract getUserById(userID: string): Promise<User>;
    abstract listUsers(): Promise<User[]>;
}