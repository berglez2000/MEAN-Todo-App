import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'http://localhost:5000/api/todos/';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.apiUrl, todo);
  }

  deleteTodo(id: string): Observable<any> {
    const url: string = this.apiUrl + id;
    return this.http.delete(url);
  }

  updateTodo(todo: Todo): Observable<any> {
    const url: string = this.apiUrl + todo._id;
    return this.http.patch<any>(url, todo);
  }
}
