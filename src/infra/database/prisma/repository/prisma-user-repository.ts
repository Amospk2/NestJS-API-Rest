import { User } from '../../../../application/entities/user';
import { UserRepository } from '../../../../application/repositories/user-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user.mapper';
import * as bcrypt from 'bcrypt';



@Injectable()
export class PrismaUserRepository implements UserRepository {

    constructor(private prisma: PrismaService) { }


    async createUser(user: User): Promise<void> {
        user.password = await bcrypt.hash(user.password, 10);
        const raw = PrismaUserMapper.toPrisma(user);

        await this.prisma.user.create({ data: raw });
    }
    async updateUser(user: User): Promise<User> {
        const raw = PrismaUserMapper.toPrisma(user);
        const updatedUser = await this.prisma.user.update({
            where: {
                id: raw.id
            },
            data: raw
        })
        return PrismaUserMapper.toDomain(updatedUser);
    }
    async deleteUser(userID: string): Promise<void> {
        await this.prisma.user.delete({
            where: {
                id: userID
            }
        });
    }
    async getUserById(userID: string): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userID
            }
        });
        return PrismaUserMapper.toDomain(user);
    }
    async listUsers(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map(PrismaUserMapper.toDomain);
    }

}