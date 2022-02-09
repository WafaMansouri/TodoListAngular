export class Todo {
    photo?: string;
    constructor(public title: string, public description: string, public date: string, public id?: string) {}
}