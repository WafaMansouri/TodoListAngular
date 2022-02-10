export class Todo {
    photo?: string;
    constructor(public title: string, public description: string, public createdDate: Date, public id?: any) {}
}