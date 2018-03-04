import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";

import { Todo } from '../models/Todo';

@Injectable()

export class TodoService {
  private _todos: BehaviorSubject<Todo[]>;
  private baseUrl: string;
  private dataStore: {  // This is where we will store our data in memory
    todos: Todo[]
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://5a72ecd68a943100120abc2e.mockapi.io/api/v1';
    this.dataStore = { todos: [] };
    this._todos = <BehaviorSubject<Todo[]>>new BehaviorSubject([]);
  }

  get todos() {
    return this._todos.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/todos`).subscribe((data:Todo[]) => {
      this.dataStore.todos = data;
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todos.'));
  }

  add(todo:any) {
    this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo)).subscribe((data:any) => {
        this.dataStore.todos.push(data);
        this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not load todo.'));
  }  

  delete(todoId: number) {
    this.http.delete(`${this.baseUrl}/todos/${todoId}`).subscribe(data => {
      this.dataStore.todos.forEach((t, i) => {
        if (t.id === todoId) 
          this.dataStore.todos.splice(i, 1);
      });
      this._todos.next(Object.assign({}, this.dataStore).todos);
    }, error => console.log('Could not delete todo.'));
  }
}    
