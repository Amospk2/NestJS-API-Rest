import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';
import { ListUsers } from './list-users';




describe('List the Articles', () => {
    const UserRepository = new InMemoryUserRepository();
    const getUsers = new ListUsers(UserRepository);

    it('should be able to list all articles', async () => {
        const users = await getUsers.execute();
        expect(users).toBeInstanceOf(Array);
    });
});