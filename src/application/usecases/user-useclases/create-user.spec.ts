import { CreateUser } from './create-user';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user-repository';

describe('Create New Article', () => {
  const UserRepository = new InMemoryUserRepository();
  const createUser = new CreateUser(UserRepository);


  it('should be able to create a new Article', async () => {
    const user = await createUser.execute({
      name: "Amós Santos",
      email: "Amos@email.com",
      age: new Date(),
      address: "Rua Roza Azul",
      password: "12345123456"
    });
    expect(UserRepository.users).toHaveLength(1);
    expect(UserRepository.users[0].email).toEqual(user.user.email);
  });



});