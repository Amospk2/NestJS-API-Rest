import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ArticleBody } from '../dtos/article-body';
import { ArticleViewModel } from '../view-model/post-view-model';
import { CreateNewArticle } from 'src/application/usecases/article-useclases/create-new-article';
import { GetArticles } from 'src/application/usecases/article-useclases/get-articles';
import { GetArticleById } from 'src/application/usecases/article-useclases/get-article-by-id';
import { UpdateArticle } from 'src/application/usecases/article-useclases/update-article';
import { DeleteArticle } from 'src/application/usecases/article-useclases/delete-article';



@Controller('article')
export class ArticleController {
  constructor(
    private createNewArticle: CreateNewArticle,
    private getArticles: GetArticles,
    private getArticleById: GetArticleById,
    private updateArticleById: UpdateArticle,
    private deleteArticleById: DeleteArticle) { }

  @Post()
  async create(@Body() body: ArticleBody) {
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

  @Get(":id")
  async getArticle(@Param('id') id: string) {
    try {
      const article = await this.getArticleById.execute({
        articleID: id
      });

      return {
        article: ArticleViewModel.toHTTP(article)
      }

    } catch (error) {
      throw new HttpException('Article Not Found', HttpStatus.NOT_FOUND);
    }
  }


  @Put(":id")
  async updateArticle(@Param('id') id: string, @Body() body: ArticleBody) {

    const { title, content } = body;
    console.log(body);
    try {
      const article = await this.updateArticleById.execute({
        articleID: id,
        title: title,
        content: content
      });
      return {
        message: "Sucess Updated",
        article: ArticleViewModel.toHTTP(article)
      }
    } catch (error) {
      throw new HttpException('Article Not Found', HttpStatus.NOT_FOUND);
    }


  }

  @Delete(":id")
  async deleteArticle(@Param('id') id: string) {
    try {
      await this.deleteArticleById.execute({
        articleID: id
      });
    } catch (error) {
      throw new HttpException('Article Not Found', HttpStatus.NOT_FOUND);
    }

  }

}
