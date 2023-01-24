import { randomUUID } from "node:crypto";
import { Replace } from '../../helpers/Replace';
import { Content } from './content';
import { Title } from './title';

export interface ArticleProps {
    content: Content,
    title: Title,
    createdAt: Date,
}

export class Article {
    private _id: string;
    private props: ArticleProps;

    constructor(
        props: Replace<ArticleProps, { createdAt?: Date }>,
        id?: string

    ) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
        };
    }


    public get id() {
        return this._id;
    }

    public get title(): Title {
        return this.props.title;
    }


    public get content(): Content {
        return this.props.content;
    }


    public get createdAt(): Date {
        return this.props.createdAt;
    }




    public set title(title: Title) {
        this.props.title = title;
    }


    public set content(content: Content) {
        this.props.content = content;
    }

}



