import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';
import { User } from '../../entities/user';


interface SendUserRequest {
    userID: string
}


@Injectable()
export class GetUserById {


    constructor(private userRepository: UserRepository) { }

    async execute(
        request: SendUserRequest
    ): Promise<User> {
        return await this.userRepository.getUserById(request.userID);
    }

}






