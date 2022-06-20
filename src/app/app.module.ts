import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { UserEditComponent } from './components/user-profile/user-edit/user-edit.component';
import { TodoInfoComponent } from './components/todo-info/todo-info.component';
import { AuthguardServiceService } from './Services/authguard-service.service';
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
    UserEditComponent,
    TodoInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
