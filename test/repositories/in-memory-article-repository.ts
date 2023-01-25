import { Article } from '../../src/application/entities/article';
import { Title } from '../../src/application/entities/title';
import { Content } from '../../src/application/entities/content';
import { ArticleRepository } from '../../src/application/repositories/article-repository';


export class inMemoryArticleRepository implements ArticleRepository {

    public articles: Article[] = [];

    async create(article: Article): Promise<void> {
        this.articles.push(article);
    }
    async listArticles(): Promise<Article[]> {
        return this.articles;
    }
    async getArticleById(articleID: string): Promise<Article> {
        const article = this.articles
            .find(element => element.id == articleID);
        return article;
    }

    async updateArticle(article: Article): Promise<Article> {
        const newArticle = this.articles
            .find((element, index) => {
                if (element.id == article.id) {
                    this.articles[index].title = new Title(article.title.value);
                    this.articles[index].content = new Content(article.content.value);

                    return this.articles[index];
                }
            });

        return newArticle;
    }


    async deleteArticle(articleID: string): Promise<void> {

        this.articles.map((element, index) => {
            if (element.id == articleID)
                delete this.articles[index];
        });
    }




}