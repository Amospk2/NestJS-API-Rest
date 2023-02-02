import { inMemoryArticleRepository } from '../../../../test/repositories/in-memory-article-repository';
import { DeleteArticle } from './delete-article';
import { GetArticleById } from './get-article-by-id';


describe('Delete a existent Article', () => {
    const ArticleRepository = new inMemoryArticleRepository();
    const deleteArticle = new DeleteArticle(ArticleRepository);
    const getArticleById = new GetArticleById(ArticleRepository);


    it('should be fail because is a invalid article ID', async () => {
        await deleteArticle.execute({
            articleID: '1234-5478-6666-5555'
        });


        const article = await getArticleById.execute({ articleID: '1234-5478-6666-5555' });
        expect(article).toEqual(undefined);
    });

});