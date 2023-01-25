import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { DatabaseModule } from '@infra/database/database.module';
import { ArticleController } from '@infra/http/controllers/article.controller';
import { CreateNewArticle } from '@application/usecases/create-new-article';
import { GetArticles } from '@application/usecases/get-articles';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [ArticleController],
      providers: [CreateNewArticle, GetArticles],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/post (GET)', () => {
    return request(app.getHttpServer())
      .get('/post')
      .expect(200)
      .expect(expect.objectContaining({ "articles": [] }));
  });
});
