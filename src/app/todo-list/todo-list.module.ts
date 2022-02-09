import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoListComponent } from './todo-list.component';
import { TodoRoutingModule } from './todo-list-routing.module';

@NgModule({
  declarations: [
    TodoListComponent,
    SingleTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoListModule { }
