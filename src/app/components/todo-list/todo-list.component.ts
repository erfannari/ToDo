import { Component, OnInit } from '@angular/core';
import { todo } from '../../models/todo';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { category } from 'src/app/models/category';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  selectOption: string = '';
  option: string = '';
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
  todos: todo[] = [];
  title: string = '';
  category_id: number;
  estimation_date: string;
  constructor() {}

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
    this.todos.push({
      title: this.title,
      is_done: false,
      category_id: this.category_id,
      estimation_date: this.estimation_date,
    });
    this.title = '';
  }
}
