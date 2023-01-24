import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateNewArticle } from '../../application/usecases/create-new-article';
import { PostController } from './controllers/app.controller';
import { GetArticles } from '@application/usecases/get-articles';


@Module({
    imports: [DatabaseModule],
    controllers: [PostController],
    providers: [CreateNewArticle, GetArticles],
})
export class HttpModule { }
