import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleTodoComponent } from "./single-todo/single-todo.component";
import { TodoListComponent } from "./todo-list.component";

const todosRoutes: Routes = [
    {path: '', component: TodoListComponent},
    {path: 'view/:id', component: SingleTodoComponent},
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