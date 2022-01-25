import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new Subject<Todo>();
  private addTodoSubject = new Subject<Todo>();

  constructor() {}

  deleteTodo(todo: Todo): void {
    this.todoSubject.next(todo);
  }

  onDeleteTodo(): Observable<Todo> {
    return this.todoSubject.asObservable();
  }

  addTodo(todo: Todo): void {
    this.addTodoSubject.next(todo);
  }

  onAddTodo(): Observable<Todo> {
    return this.addTodoSubject.asObservable();
  }
}
