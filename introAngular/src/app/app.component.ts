import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { todoItems } from './models/todoItem.mock';


@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //imports:[CommonModule, FormsModule]


})
export class AppComponent {
  title = 'Intro Angular';
  creator: string = 'Türkay Ürkmez';
  createdDate: string = 'Mart 2024'

  todoItems: TodoItem[] = todoItems

  filter(){
    this.isAllTasksDisplaying = !this.isAllTasksDisplaying
    if (!this.isAllTasksDisplaying) {
      this.todoItems = this.todoItems.filter(x=>!x.isDone);
    }
    else{
      this.todoItems = todoItems;
    }

  }

  isAllTasksDisplaying: boolean = true;

  getButtonText():string{
    return this.isAllTasksDisplaying ? "Yapılan işleri gizle" : "Tüm Görevleri Göster";
  }
}
