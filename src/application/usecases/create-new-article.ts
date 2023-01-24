import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../repositories/article-repository';
import { Content } from '../entities/content';
import { Title } from '../entities/title';
import { Article } from '../entities/article';


interface SendArticleRequest {
    title: string
    content: string,

}

interface SendArticleResponse {
    article: Article
}

@Injectable()
export class CreateNewArticle{
    constructor(private articleRepository: ArticleRepository) {}

    async execute(
        request: SendArticleRequest
    ): Promise<SendArticleResponse> {
        const { title, content } = request;

        const article = new Article({
            title: new Title(title),
            content: new Content(content)
        });


        await this.articleRepository.create(article);

        return {
            article,
        };
    }
}