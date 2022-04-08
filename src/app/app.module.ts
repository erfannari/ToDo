import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';
import { HeroComponent } from './components/hero/hero.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignUpComponent,
    HeroComponent,
    UserProfileComponent,
    CategoriesComponent,
    NavbarComponent,
    TodoListComponent,
    AddTaskComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
