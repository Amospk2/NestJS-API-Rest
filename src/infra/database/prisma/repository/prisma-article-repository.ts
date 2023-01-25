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
        const raw = PrismaArticleMapper.toPrisma(article);
        await this.prisma.article.create({
            data: raw
        });
    }

    async getArticleById(articleID: string): Promise<Article> {
        const article = await this.prisma.article.findFirst({
            where: {
                id: articleID
            }
        });
        return PrismaArticleMapper.toDomain(article);
    }

    async updateArticle(article: Article): Promise<Article> {
        const raw = PrismaArticleMapper.toPrisma(article);
        const newArticle = await this.prisma.article.update({
            where: {
                id: raw.id
            },
            data: raw
        });
        console.log(raw);
        return PrismaArticleMapper.toDomain(newArticle);

    }


    async deleteArticle(articleID: string): Promise<void> {
        await this.prisma.article.delete({
            where: {
                id: articleID
            }
        });
    }



}