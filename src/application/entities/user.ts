import { Replace } from '../../helpers/Replace';
import { randomUUID } from 'node:crypto';


export interface UserProps {
    name: string,
    email: string,
    address: string,
    age: Date,
    password: string
    createdAt: Date
}



export class User {
    private _id: string;
    private props: UserProps;


    constructor(
        props: Replace<UserProps, { createdAt?: Date }>,
        id?: string
    ) {
        if (this.hasValidValues(props)) {
            this._id = id ?? randomUUID();
            this.props = {
                ...props,
                createdAt: props.createdAt ?? new Date(),
            }
        }

    }


    private hasValidValues(props: Replace<UserProps, { createdAt?: Date }>): boolean {

        if (props.name.length < 5)
            throw new Error('Name length error.');

        if (props.email.length < 7)
            throw new Error('Email length error.');

        if (props.age > new Date())
            throw new Error('Invalid date error.');

        if (props.address.length < 5)
            throw new Error('Adress length error.');

        if (props.password.length < 10)
            throw new Error('Password length error.');

        return true;
    }




    public get id() {
        return this._id;
    }

    public get name(): string {
        return this.props.name;
    }

    public get email(): string {
        return this.props.email;
    }

    public get age(): Date {
        return this.props.age;
    }

    public get address(): string {
        return this.props.address;
    }

    public get password(): string {
        return this.props.password;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }




    public set name(name: string) {
        this.props.name = name;
    }

    public set email(email: string) {
        this.props.email = email;
    }

    public set age(age: Date) {
        this.props.age = age;
    }

    public set address(address: string) {
        this.props.address = address;
    }

    public set password(password: string) {
        this.props.password = password;
    }



    public set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt;
    }


}