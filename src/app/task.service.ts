import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', dueDate: new Date(), status: 'Pending', priority: 'High' },
    { id: 2, title: 'Task 2', description: 'Description 2', dueDate: new Date(), status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Task 3', description: 'Description 3', dueDate: new Date(), status: 'Completed', priority: 'Low' }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  getTask(id: number): Observable<Task> {
    const task = this.tasks.find(task => task.id === id);
    return of(task!);
  }

  addTask(task: Task): Observable<Task> {
    this.tasks.push(task);
    return of(task);
  }

  updateTask(updatedTask: Task): Observable<Task> {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
    return of(updatedTask);
  }

  deleteTask(id: number): Observable<void> {
    this.tasks = this.tasks.filter(task => task.id !== id);
    return of();
  }

  toggleStatus(task: Task): Observable<Task> {
    task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
    return this.updateTask(task);
  }
}