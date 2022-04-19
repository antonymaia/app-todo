import { environment } from '../../environments/environment';
import { Task } from '../modules/home/model/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly URL_TODO_API = environment.URL_TODO_API;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>>{
    return this.http.get<Array<Task>>(`${this.URL_TODO_API}/task`);
  }
}
