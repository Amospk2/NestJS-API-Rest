import { Injectable } from "@nestjs/common";
import { UserRepository } from '../../repositories/user-repository';
import { User } from "../../entities/user";

interface SendUserRequest {
    userID: string,
    name: string,
    email: string,
    address: string,
    age: Date,
    password: string
}


@Injectable()
export class UpdateUser {

    constructor(private userRepository: UserRepository) { }

    async execute(
        request: SendUserRequest
    ): Promise<User> {
        return this.userRepository.updateUser(new User(
            {
                name: request.name,
                email: request.email,
                address: request.address,
                age: request.age,
                password: request.password
            },
            request.userID
        ));
    }
}