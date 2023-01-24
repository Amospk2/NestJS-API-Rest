import { Article as RawArticle } from '@prisma/client';
import { Article } from '@application/entities/article';
import { Content } from '@application/entities/content';
import { Title } from '@application/entities/title';

export class PrismaArticleMapper {
    static toPrisma(article: Article) {
        return {
            id: article.id,
            title: article.title.value,
            content: article.content.value
        }
    }

    static toDomain(raw: RawArticle): Article {
        return new Article(
            {
                title: new Title(raw.title),
                content: new Content(raw.content)
            },
            raw.id
        );
    }
}