import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { ApiService } from 'src/app/services/api.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  todos: Todo[] = [];
  isLoading: boolean = true;

  constructor(
    private todoService: TodoService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.apiService
      .getTodos()
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
        this.isLoading = false;
      });

    this.subscription = this.todoService
      .onDeleteTodo()
      .subscribe((todo: Todo) => {
        this.todos = this.todos.filter((todoItem) => todoItem._id !== todo._id);
        this.subscription = this.apiService.deleteTodo(todo._id).subscribe();
      });

    this.subscription = this.todoService.onAddTodo().subscribe((todo: Todo) => {
      todo._id = this.todos.length + 1;
      this.todos.push(todo);
      this.subscription = this.apiService
        .addTodo(todo)
        .subscribe((todos: Todo[]) => {
          this.todos = todos;
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
