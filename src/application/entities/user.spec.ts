import { User } from './user';

describe('Test user model', () => {
  it('should be able to create a user', () => {
    const user = new User(
      { name: "Amós Santos", email: "Amos@email.com", age: new Date(), address: "Rua Roza Azul", password:"12345678910" });

    expect(user).toBeTruthy();
  });


  it('should not be able to create user with name length less than 5 characters', () => {
    expect(() => new User(
      { name: "Amós", email: "Amos@email.com", age: new Date(), address: "Rua Roza Azul", password:"12345678910" }
    )).toThrow();
  });


  it('should not be able to create a User with email length less than 7 characters', () => {
    expect(() => new User(
      { name: "Amós Santos", email: "Amos@e", age: new Date(), address: "Rua Roza Azul", password:"12345678910" }
    )).toThrow();
  });


  it('should not be able to create a User with age date greater than today', () => {
    var date = new Date();
    date.setMonth(date.getMonth() + 1);

    expect(() => new User(
      { name: "Amós Santos", email: "Amos@email.com", age: date, address: "Rua Roza Azul", password:"12345678910" }
    )).toThrow();
  });

  it('should not be able to create a User with password length less than 10 characters', () => {
    expect(() => new User(
      { name: "Amós Santos", email: "Amos@email.com", age: new Date(), address: "Rua Roza Azul", password:"12345" }
    )).toThrow();
  });



});