import { User } from '../../../../application/entities/user';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
    static toPrisma(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            age: user.age,
            password: user.password,
            createdAt: user.createdAt
        };
    }

    static toDomain(raw: RawUser): User {
        return new User({
            name: raw.name,
            email: raw.email,
            address: raw.address,
            password: raw.password,
            age: raw.age,
            createdAt: raw.createdAt
        },
            raw.id
        );
    }
}

