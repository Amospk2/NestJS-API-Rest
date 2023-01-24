import { IsNotEmpty } from 'class-validator';

export class CreateArticleBody {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
}