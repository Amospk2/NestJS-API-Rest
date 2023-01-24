import { ArticleRepository } from '../../../../application/repositories/article-repository';
import { PrismaService } from '../prisma.service';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Article } from '../../../../application/entities/article';
import { PrismaArticleMapper } from '../mappers/prisma-article-mapper';

@Injectable()
export class PrismaArticleRepository implements ArticleRepository {

    constructor(private prisma: PrismaService) { }
    async listArticles(): Promise<Article[]> {
        const articles = await this.prisma.article.findMany();

        return articles.map(PrismaArticleMapper.toDomain);
    }

    async create(article: Article): Promise<void> {
        await this.prisma.article.create({
            data: {
                id: randomUUID(), title: article.title.value, content: article.content.value
            }
        })
    }

}