import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';
import { User } from '../../entities/user';




interface SendUserRequest {
    name: string,
    email: string,
    address: string,
    age: Date,
    password: string
    createdAt?: Date
}

interface SendUserResponse {
    user: User
}

@Injectable()
export class CreateUser {

    constructor(private userRepository: UserRepository) { }

    async execute(
        request: SendUserRequest
    ): Promise<SendUserResponse> {
        const { name, email, address, age, password } = request;

        const user = new User({
            name, email, address, age, password
        });

        await this.userRepository.createUser(user);

        return {
            user,
        };
    }
}