import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AuthGuardService } from "./services/auth-guard.service";

const appRoutes: Routes = [
    {path: 'todos', canActivate: [AuthGuardService], loadChildren: () => import('./todo-list/todo-list.module').then(m =>m.TodoListModule)},
    {path: 'auth/signup', component: SignUpComponent},
    {path: 'auth/signin', component: SignInComponent},
    {path: '', component: LandingPageComponent},
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