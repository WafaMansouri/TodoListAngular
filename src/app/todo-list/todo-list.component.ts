import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [{title: "test", description: "testtttt", date: "testt"}]

  constructor() { }

  ngOnInit(): void {
  }

  onViewTodo(id: number) {}

  onDeleteBook(todo: any) {}
}
