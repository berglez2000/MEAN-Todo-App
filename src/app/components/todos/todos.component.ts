import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  todos: Todo[] = [
    {
      id: 1,
      todo: 'Grocery Store',
      completed: false
    },
    {
      id: 2,
      todo: 'Laundry',
      completed: false
    },
    {
      id: 3,
      todo: 'Homework',
      completed: true
    }
  ];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription = this.todoService.onDeleteTodo().subscribe((todo: Todo) => {
      this.todos = this.todos.filter(todoItem => todoItem.id !== todo.id);
    });

    this.subscription = this.todoService.onAddTodo().subscribe((todo: Todo) => {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
      console.log(this.todos);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
