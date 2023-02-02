import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../../repositories/article-repository';
import { Article } from '../../entities/article';


interface SendArticleResponse {
    articles: Article[]
}

@Injectable()
export class GetArticles {
    constructor(private articleRepository: ArticleRepository) { }

    async execute(): Promise<SendArticleResponse> {

        const articles = await this.articleRepository.listArticles();

        return { articles: articles };
    }
}