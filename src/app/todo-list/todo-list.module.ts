import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoListComponent } from './todo-list.component';
import { TodoRoutingModule } from './todo-list-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    SingleTodoComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
