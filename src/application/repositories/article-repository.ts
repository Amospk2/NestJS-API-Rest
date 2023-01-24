import { Article } from '../entities/article';
export abstract class ArticleRepository{
    abstract create(article: Article): Promise<void>;
    abstract listArticles(): Promise<Article[]>
}