import { inMemoryArticleRepository } from '../../../../test/repositories/in-memory-article-repository';
import { GetArticleById } from './get-article-by-id';

describe('Get a specify Article', () => {
    const ArticleRepository = new inMemoryArticleRepository();
    const getArticlesById = new GetArticleById(ArticleRepository);


    it('should be fail because is a invalid article ID', async () => {
        const article = await getArticlesById.execute({
            articleID: '1234-5478-6666-5555'
        });
        expect(article).toEqual(undefined);
    });

});