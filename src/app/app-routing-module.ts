import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

const appRoutes: Routes = [
    {path: 'todos', loadChildren: () => import('./todo-list/todo-list.module').then(m =>m.TodoListModule)},
    {path: 'auth/signup', component: SignUpComponent},
    {path: 'auth/signin', component: SignInComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}