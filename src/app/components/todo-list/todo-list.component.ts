import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestApiService } from 'src/app/components/AuthenticationService/restApiService';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoForm: FormGroup;
  // categories: category[] = [
  //   {
  //     id: 1,
  //     name: 'Personal',
  //   },
  //   {
  //     id: 2,
  //     name: 'Home',
  //   },
  //   {
  //     id: 3,
  //     name: 'Buisness',
  //   },
  //   {
  //     id: 4,
  //     name: 'Family',
  //   },
  // ];
  todos: any = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private restApi: RestApiService
  ) {
    this.todoForm = this.fb.group({
      Title: '',
      category_name: '',
    });
    // this.restApi.addCategory(this.categories['id']).subscribe((categoriesResponse) => {
    //   console.log(categoriesResponse)
    // });
  }
  ngOnInit(): void {}
  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i == id) v.is_done = !v.is_done;
      return v;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  addTodo() {
    const formData: any = new FormData();
    formData.append('todoTitle', this.todoForm.get('Title').value);
    formData.append('category_name', this.todoForm.get('category_name').value);
    console.log(this.todoForm);
    this.restApi.addTodo(formData).subscribe((todo_response) => {
      console.log(todo_response);
      console.log(localStorage.getItem('user_token'));
    });
  }
}
