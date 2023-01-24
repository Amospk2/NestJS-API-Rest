export class Title{
    private readonly title: string;

    get value(): string{
        return this.title;
    }

    private validateTitleLength(title: string): boolean
    {
        return title.length <= 0;
    }


    constructor(title: string)
    {
        const isTitleLengthValid = this.validateTitleLength(title);


        if(isTitleLengthValid){
            throw new Error('Title length error, the length could not be null!')
        }


        this.title = title;
    
    }
}