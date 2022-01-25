import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor(
    private todoService: TodoService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  onComplete() {
    this.todo.completed = this.todo.completed === 'true' ? 'false' : 'true';
    this.apiService.updateTodo(this.todo).subscribe();
  }

  onDelete() {
    this.todoService.deleteTodo(this.todo);
  }
}
