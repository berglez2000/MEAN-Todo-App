import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todo: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.todo) {
      return;
    }

    const todo: Todo = {
      todo: this.todo,
      completed: 'false',
    };

    this.todoService.addTodo(todo);
  }
}
