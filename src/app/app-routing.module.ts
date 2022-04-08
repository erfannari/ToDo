import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  { path: '', component: LoginSignUpComponent },
  { path: 'profile', component: UserProfileComponent },
  // { path: 'category', component: CategoriesComponent },
  { path: 'todoList', component: TodoListComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: LoginSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
