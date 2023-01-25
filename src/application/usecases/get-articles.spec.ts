import { inMemoryArticleRepository } from '../../../test/repositories/in-memory-article-repository';
import { GetArticles } from './get-articles';
import { Article } from '../entities/article';


describe('List the Articles', () => {
    const ArticleRepository = new inMemoryArticleRepository();
    const getArticles = new GetArticles(ArticleRepository);

    it('should be able to list all articles', async () => {
        const articles = await getArticles.execute();
        expect(articles.articles).toBeInstanceOf(Array);
    });
});