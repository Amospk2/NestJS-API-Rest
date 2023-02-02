import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';




interface SendUserRequest {
    userID: string
}



@Injectable()
export class DeleteUser {

    constructor(private userRepository: UserRepository) { }

    async execute(
        request: SendUserRequest
    ): Promise<void> {
        await this.userRepository.deleteUser(request.userID);
    }


}





