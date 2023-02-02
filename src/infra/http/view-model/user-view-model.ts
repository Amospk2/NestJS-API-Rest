import { User } from '../../../application/entities/user';



export class UserViewModel {
    static toHTTP(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            age: user.age,
            password: user.password,
            createdAt: user.createdAt
        }
    }
}