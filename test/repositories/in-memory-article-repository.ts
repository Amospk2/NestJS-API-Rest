import { Article } from '../../src/application/entities/article';
import { ArticleRepository } from '../../src/application/repositories/article-repository';





export class inMemoryArticleRepository implements ArticleRepository {


    public articles: Article[] = [];


    async create(article: Article): Promise<void> {
        this.articles.push(article);
    }
    async listArticles(): Promise<Article[]> {
        return this.articles;
    }
}