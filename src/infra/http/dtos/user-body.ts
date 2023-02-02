import { IsNotEmpty, IsEmail, MinLength } from "class-validator";



export class UserBody {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    age: string;

    @IsNotEmpty()
    @MinLength(10)
    password: string;

}

