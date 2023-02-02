
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';
import { GetUserById } from './get-user-by-id';

describe('Create New Article', () => {
    const UserRepository = new InMemoryUserRepository();
    const getUserByID = new GetUserById(UserRepository);


    it('should be able to get a user by id', async () => {
        const user = await getUserByID.execute({
            userID: "1236-2112-1221-3333"
        });
        expect(user).toEqual(undefined);
    });

});