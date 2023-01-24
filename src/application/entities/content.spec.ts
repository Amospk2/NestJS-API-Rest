import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a post content', () => {
    const content = new Content('Novo Curso de NestJS');

    expect(content).toBeTruthy();
  });


  it('should be able to create a post content', () => {
    const content = new Content('Criando Teste usando nestjs');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a post content with less than 10 characters', () => {
    expect(() => new Content('My Post')).toThrow();
  });


});