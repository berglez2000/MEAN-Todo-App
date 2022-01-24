import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    console.log(this.todo);
  }

  onSubmit(){
    if(!this.todo){
      return;
    }

    const todo: Todo = {
      todo: this.todo,
      completed: false
    }
  }
}
