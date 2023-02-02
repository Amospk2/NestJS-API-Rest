import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../repositories/article-repository';
import { Article } from '../../entities/article';

interface SendArticleRequest {
    articleID: string

}

@Injectable()
export class GetArticleById {
    constructor(private articleRepository: ArticleRepository) { }

    async execute(
        request: SendArticleRequest
    ): Promise<Article> {
        return await this.articleRepository.getArticleById(request.articleID);
    }
}