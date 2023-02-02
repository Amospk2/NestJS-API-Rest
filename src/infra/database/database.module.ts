import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ArticleRepository } from '../../application/repositories/article-repository';
import { PrismaArticleRepository } from './prisma/repository/prisma-article-repository';
import { UserRepository } from '../../application/repositories/user-repository';
import { PrismaUserRepository } from './prisma/repository/prisma-user-repository';



@Module({
  providers: [PrismaService,
    {
      provide: ArticleRepository,
      useClass: PrismaArticleRepository
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }],
  exports: [ArticleRepository, UserRepository]
})
export class DatabaseModule { }
