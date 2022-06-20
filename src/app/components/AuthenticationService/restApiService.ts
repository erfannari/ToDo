import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegister } from '../shared/userRegister';
import { userLogin } from '../shared/userLogin';
import { addTodo } from '../../models/addTodo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../../src/environments/environment';
import { category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}
  categories: category[] = [
    {
      id: 1,
      name: 'Personal',
    },
    {
      id: 2,
      name: 'Home',
    },
    {
      id: 3,
      name: 'Buisness',
    },
    {
      id: 4,
      name: 'Family',
    },
  ];
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };
  httpOptionsToken = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer ' + localStorage.getItem('user_token'),
    }),
  };
  loginUser(user: any): Observable<userLogin> {
    return this.http.post<userLogin>(
      environment.api_url + '/login',
      user,
      this.httpOptions
    );
  }
  registerUser(user: any): Observable<userRegister> {
    return this.http.post<userRegister>(
      environment.api_url + '/register',
      user,
      this.httpOptions
    );
  }
  me() {
    return this.http.get(environment.api_url + '/me', this.httpOptionsToken);
  }
  logOut() {
    return this.http.post(
      environment.api_url + '/logout',
      this.httpOptionsToken
    );
  }
  addTodo(addTodo: any): Observable<addTodo> {
    return this.http.post<addTodo>(
      environment.api_url + '/todos',
      addTodo,
      this.httpOptionsToken
    );
  }
  addCategory(addCat: any): Observable<category> {
    return this.http.post<category>(
      environment.api_url + '/categories',
      addCat,
      this.httpOptionsToken
    );
  }
}
