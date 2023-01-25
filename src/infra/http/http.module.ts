import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateNewArticle } from '../../application/usecases/create-new-article';
import { ArticleController } from './controllers/article.controller';
import { GetArticles } from '../../application/usecases/get-articles';
import { GetArticleById } from '../../application/usecases/get-article-by-id';
import { UpdateArticle } from '../../application/usecases/update-article';
import { DeleteArticle } from '../../application/usecases/delete-article';


@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController],
    providers: [CreateNewArticle, GetArticles, GetArticleById, UpdateArticle, DeleteArticle],
})
export class HttpModule { }
