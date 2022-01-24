import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onComplete(){
    this.todo.completed = !this.todo.completed;
  }

  onDelete(){
    
  }
}
