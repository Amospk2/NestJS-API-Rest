import { Injectable } from "@nestjs/common";
import { UserRepository } from '../../repositories/user-repository';
import { User } from '../../entities/user';





@Injectable()
export class ListUsers {
    constructor(private userRepository: UserRepository) { }
    async execute(): Promise<User[]> {
        return this.userRepository.listUsers();
    }
}