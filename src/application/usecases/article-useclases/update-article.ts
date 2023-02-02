import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../repositories/article-repository';
import { Article } from '../../entities/article';
import { Content } from '../../entities/content';
import { Title } from '../../entities/title';

interface SendArticleRequest {
    articleID: string,
    title: string,
    content: string

}

@Injectable()
export class UpdateArticle {
    constructor(private articleRepository: ArticleRepository) { }

    async execute(
        request: SendArticleRequest
    ): Promise<Article> {
        return await this.articleRepository
            .updateArticle(new Article({
                title: new Title(request.title),
                content: new Content(request.content)
            },
                request.articleID
            ));
    }
}