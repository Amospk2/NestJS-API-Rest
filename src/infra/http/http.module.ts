import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ArticleController } from './controllers/article.controller';
import { GetArticles } from '../../application/usecases/article-useclases/get-articles';
import { GetArticleById } from '../../application/usecases/article-useclases/get-article-by-id';
import { UpdateArticle } from '../../application/usecases/article-useclases/update-article';
import { DeleteArticle } from '../../application/usecases/article-useclases/delete-article';
import { CreateNewArticle } from '../../application/usecases/article-useclases/create-new-article';
import { CreateUser } from '../../application/usecases/user-useclases/create-user';
import { UserController } from './controllers/user.controller';
import { UpdateUser } from '../../application/usecases/user-useclases/update-user';
import { ListUsers } from '../../application/usecases/user-useclases/list-users';
import { GetUserById } from '../../application/usecases/user-useclases/get-user-by-id';
import { DeleteUser } from '../../application/usecases/user-useclases/delete-user';


@Module({
    imports: [DatabaseModule],
    controllers: [ArticleController, UserController],
    providers: [
        CreateNewArticle, GetArticles, GetArticleById, UpdateArticle, DeleteArticle,
        CreateUser, UpdateUser, ListUsers, GetUserById, DeleteUser],
})
export class HttpModule { }
