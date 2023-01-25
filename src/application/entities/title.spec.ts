import { Title } from './title';

describe('Post Title tests', () => {
  it('should be able to create a post title', () => {
    const title = new Title('Novo Curso de NestJS');

    expect(title).toBeTruthy();
  });


  it('should be able to create a post Title', () => {
    const title = new Title('Criando Teste usando nestjs');

    expect(title).toBeTruthy();
  });

  it('should not be able to create a post Title with less than 0 characters', () => {
    expect(() => new Title('')).toThrow();
  });


});