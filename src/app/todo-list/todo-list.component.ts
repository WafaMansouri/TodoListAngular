import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos!: Todo[]
  todosSubscription!: Subscription

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.todosSubscription = this.todoService.todosSubject.subscribe(
      (todos: Todo[]) => {
        this.todos = todos
      }
      )
      this.todoService.getAllTodos()
  }

  onAddTodo() {
    this.router.navigate(['/todos', 'new'])
  }

  onViewTodo(id: number) {
    this.router.navigate([`todos/view/${id}`])
  }

  onDeleteTodo(todo: any) {
    this.todoService.deleteTodo(todo.id).then(
      () => {
        this.router.navigate(['/todos'])
      }
    )
  }
}
