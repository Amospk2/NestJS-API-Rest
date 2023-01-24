import { inMemoryArticleRepository } from '../../../test/repositories/in-memory-article-repository';
import { GetArticles } from './get-articles';
import { CreateNewArticle } from './create-new-article';


describe('Create New Article', () => {
    it('should be able to create a new Article', async () => {
        const ArticleRepository = new inMemoryArticleRepository();
        const getArticles = new GetArticles(ArticleRepository);
        const createNewArticle = new CreateNewArticle(ArticleRepository);

        //clean the list
        ArticleRepository.articles.pop();

        await createNewArticle.execute({
            content: 'This is a Article 1',
            title: 'example-Article 1',
        });

        await createNewArticle.execute({
            content: 'This is a Article 2',
            title: 'example-Article',
        });

        await createNewArticle.execute({
            content: 'This is a Article 3',
            title: 'example-Article 3',
        });


        const articles = await getArticles.execute();
        expect(articles.articles[0].title).toEqual({"title":"example-Article 1"});
        expect(articles.articles[0].content).toEqual({"content":'This is a Article 1'});

    });
});