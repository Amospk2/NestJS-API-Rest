import { User } from 'src/application/entities/user';
import { UserRepository } from '../../src/application/repositories/user-repository';



export class InMemoryUserRepository implements UserRepository {


    public users: User[] = [];


    async createUser(user: User): Promise<void> {
        this.users.push(user);
    }
    async updateUser(user: User): Promise<User> {
        return this.users.find((value, index) => {
            if (value.id == user.id) {
                this.users[index] = user;
                return this.users[index];
            }
        });
    }
    async deleteUser(userID: string): Promise<void> {
        this.users.find((value, index) => {
            if (value.id == userID)
                delete this.users[index];
        });
    }
    async getUserById(userID: string): Promise<User> {
        return this.users.find((value, index) => {
            if (value.id == userID)
                return value;
        });
    }
    async listUsers(): Promise<User[]> {
        return this.users;
    }

}