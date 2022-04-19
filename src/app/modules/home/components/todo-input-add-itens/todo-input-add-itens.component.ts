import { Task } from './../../model/task';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public task: Task = {id: null, description: '', checked: false};
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.task.description = this.task.description.trim();
    if(this.task.description){
      this.emitItemTaskList.emit(this.task);
      this.task.description = ''; 
    }
  }

}
