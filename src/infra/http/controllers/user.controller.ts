import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUser } from '../../../application/usecases/user-useclases/create-user';
import { UserBody } from '../dtos/user-body';
import { UserViewModel } from '../view-model/user-view-model';
import { ListUsers } from '../../../application/usecases/user-useclases/list-users';
import { GetUserById } from '../../../application/usecases/user-useclases/get-user-by-id';
import { UpdateUser } from '../../../application/usecases/user-useclases/update-user';
import { DeleteUser } from '../../../application/usecases/user-useclases/delete-user';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { isInstance } from 'class-validator';


@Controller('user')
export class UserController {

    constructor(
        private createUser: CreateUser,
        private listUsers: ListUsers,
        private getUserById: GetUserById,
        private updateUser: UpdateUser,
        private deleteUser: DeleteUser
    ) { }



    @Post()
    async create(@Body() body: UserBody) {
        try {
            const { name, email, address, password } = body;
            const age = new Date(body.age);
            const user = await this.createUser.execute({
                name,
                email,
                address,
                age,
                password
            });

            return {
                user: UserViewModel.toHTTP(user.user)
            };
        } catch (error) {

            if (error instanceof PrismaClientKnownRequestError) {
                if (error.message.includes('Unique constraint failed on the fields: (`name`)'))
                    throw new HttpException('Name already in use.', HttpStatus.BAD_REQUEST);
                if (error.message.includes('Unique constraint failed on the fields: (`email`)'))
                    throw new HttpException('Email already in use.', HttpStatus.BAD_REQUEST);
            }

        }

    }


    @Put(":id")
    async update(@Param('id') id: string, @Body() body: UserBody) {
        const { name, email, address, password } = body;
        const age = new Date(body.age);

        const updatedUser = await this.updateUser.execute({
            userID: id,
            name: name,
            email: email,
            age: age,
            address: address,
            password: password
        });

        return {
            user: UserViewModel.toHTTP(updatedUser)
        }
    }


    @Get()
    async list() {
        const users = this.listUsers.execute();
        return {
            users: (await users).map(UserViewModel.toHTTP)
        }
    }


    @Get(":id")
    async show(@Param('id') id: string) {
        try {
            const user = await this.getUserById.execute({ userID: id });
            return {
                user: UserViewModel.toHTTP(user)
            };

        } catch (error) {
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }
    }


    @Delete(":id")
    async delete(@Param('id') id: string) {
        try {

            await this.deleteUser.execute({ userID: id });
        } catch (error) {
            throw new HttpException('Article Not Found', HttpStatus.NOT_FOUND);
        }
    }

}