import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';
import { DeleteUser } from './delete-user';



describe('Delete a existent Article', () => {
    const UserRepository = new InMemoryUserRepository();
    const deleteUser = new DeleteUser(UserRepository);


    it('should be fail because is a invalid article ID', async () => {
        const user = await deleteUser.execute({
            userID: '1234-5478-6666-5555'
        });
        expect(user).toEqual(undefined);
    });

});