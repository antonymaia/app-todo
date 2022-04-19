import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public taskDescription: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.taskDescription = this.taskDescription.trim();
    if(this.taskDescription){
      this.emitItemTaskList.emit(this.taskDescription);
      this.taskDescription = ''; 
    }
  }

}
