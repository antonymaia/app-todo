import { Task } from './../../model/task';
import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck, OnInit {

  public taskList: Array<Task> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTaskList(task: Task) {
    this.taskService.createTask(task).subscribe(
      (data) => {
        this.getTasks();
      },
      (error) => {console.log(error)}
    );
  }

  public deleteItemTaskList(id: number) {
    this.taskService.deleteTask(id).subscribe(
      (data) => { this.getTasks() },
      (error) => { console.log(error) }
    )
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');
    if (confirm) {
      this.taskService.deleteAllTasks().subscribe(
        (data) => { this.getTasks() }
      )
    }
  }

  public validationInput(task: Task) {
    if (!task.description.length) {
      const confirm = window.confirm('Descrição da Task está vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(task.id);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
    }
  }

  public getTasks(): void{
    this.taskService.getTasks().subscribe(
      (data) => {
        this.taskList = data;
      }
    );
  }
}
