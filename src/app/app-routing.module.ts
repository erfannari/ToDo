import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserEditComponent } from './components/user-profile/user-edit/user-edit.component';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: LoginSignUpComponent },
  { path: 'user-edit', component: UserEditComponent },
  {
    path: 'todo-info',
    component: TodoInfoComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
