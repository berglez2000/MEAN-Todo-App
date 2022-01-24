import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
