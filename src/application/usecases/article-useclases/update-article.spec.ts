import { inMemoryArticleRepository } from '../../../../test/repositories/in-memory-article-repository';
import { UpdateArticle } from './update-article';

describe('Create New Article', () => {
    const ArticleRepository = new inMemoryArticleRepository();
    const updateArticle = new UpdateArticle(ArticleRepository);


    it('should be fail because is a invalid article ID', async () => {
        const article = await updateArticle.execute({
            articleID: 'e7f339ce-44e0-4030-b53c-98c7212d434a',
            title: 'Teste',
            content: 'Teste a new content'
        });
        expect(article).toEqual(undefined);
    });

});