import { Controller, Body, Post, Get } from '@nestjs/common';
import { CreateNewArticle } from '../../../application/usecases/create-new-article';
import { CreateArticleBody } from '../dtos/create-article-body';
import { ArticleViewModel } from '../view-model/post-view-model';
import { GetArticles } from '../../../application/usecases/get-articles';


@Controller('post')
export class PostController {
  constructor(
    private createNewArticle: CreateNewArticle,
    private getArticles: GetArticles) { }

  @Post()
  async create(@Body() body: CreateArticleBody) {
    const { title, content } = body;

    const article = await this.createNewArticle.execute({
      title,
      content
    });

    return {
      article: ArticleViewModel.toHTTP(article.article)
    }

  }


  @Get()
  async getAllArticles() {
    const articles = await this.getArticles.execute();

    return {
      articles: articles.articles.map(ArticleViewModel.toHTTP)
    }
  }
}
