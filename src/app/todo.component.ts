import { Component, OnChanges} from '@angular/core';
import { Todo } from './Todo';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Observable<Todo[]>;
   constructor(private todoService: TodoService){
        this.todos = this.todoService.todos;
        this.todoService.loadAll();
   }

   getTodo(id:number) {
    // this.todoService.load(id);
   }

   addTodo() {
    // this.todoService.add({});
   }

   deleteTodo(id:number) {
    // this.todoService.delete(id);
   }

   isCompleted(todo:Todo) {
     todo.completed = !todo.completed;
   }
   
}