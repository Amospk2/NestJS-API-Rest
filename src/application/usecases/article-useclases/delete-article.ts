import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../repositories/article-repository';

interface SendArticleRequest {
    articleID: string

}

@Injectable()
export class DeleteArticle {
    constructor(private articleRepository: ArticleRepository) { }

    async execute(
        request: SendArticleRequest
    ): Promise<void> {
        await this.articleRepository.deleteArticle(request.articleID);
    }
}