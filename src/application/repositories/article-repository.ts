import { Article } from '../entities/article';
export abstract class ArticleRepository {
    abstract create(article: Article): Promise<void>;
    abstract listArticles(): Promise<Article[]>
    abstract getArticleById(articleID: string): Promise<Article>
    abstract updateArticle(article: Article): Promise<Article>
    abstract deleteArticle(articleID: string): Promise<void>
}