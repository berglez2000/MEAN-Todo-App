import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      todo: 'Grocery Store',
      completed: false
    },
    {
      todo: 'Laundry',
      completed: false
    },
    {
      todo: 'Homework',
      completed: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
