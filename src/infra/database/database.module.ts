import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ArticleRepository } from '@application/repositories/article-repository';
import { PrismaArticleRepository } from '@infra/database/prisma/repository/prisma-article-repository';


@Module({
  providers: [PrismaService,
    {
      provide: ArticleRepository,
      useClass: PrismaArticleRepository
    }],
    exports:[ArticleRepository]
})
export class DatabaseModule { }
