import { Article } from '../../../application/entities/article';

export class ArticleViewModel {
    static toHTTP(article: Article) {
        return {
            id: article.id,
            title: article.title.value,
            content: article.content.value,
            createdAt: article.createdAt
        }
    }
}