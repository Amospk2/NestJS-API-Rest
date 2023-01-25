import { IsNotEmpty } from 'class-validator';

export class ArticleBody {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
}