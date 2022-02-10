import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleTodoComponent } from "./single-todo/single-todo.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todo-list.component";

const todosRoutes: Routes = [
    {path: '', component: TodoListComponent},
    {path: 'view/:id', component: SingleTodoComponent},
    {path: 'new', component: TodoFormComponent},
]

@NgModule({
    imports: [
        RouterModule.forChild(todosRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TodoRoutingModule {}