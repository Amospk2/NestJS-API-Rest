import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';
import { UpdateUser } from './update-user';



describe('Delete a existent Article', () => {
    const UserRepository = new InMemoryUserRepository();
    const updateUser = new UpdateUser(UserRepository);


    it('should be fail because is a invalid article ID', async () => {
        const user = await updateUser.execute({
            userID: '1234-5478-6666-5555',
            name: "Amós Santos",
            email: "Amos@email.com",
            age: new Date(),
            address: "Rua AAA",
            password: "SA&@HID(*!@#@I(#J##"
        });
        expect(user).toEqual(undefined);
    });

});