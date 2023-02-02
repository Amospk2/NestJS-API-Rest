import { CreateNewArticle } from './create-new-article';
import { inMemoryArticleRepository } from '../../../../test/repositories/in-memory-article-repository';

describe('Create New Article', () => {
  it('should be able to create a new Article', async () => {
    const ArticleRepository = new inMemoryArticleRepository();
    const createNewArticle = new CreateNewArticle(ArticleRepository);

    const { article } = await createNewArticle.execute({
      content: 'This is a Article',
      title: 'example-Article',
    });

    expect(ArticleRepository.articles).toHaveLength(1);
    expect(ArticleRepository.articles[0]).toEqual(article);
  });
});