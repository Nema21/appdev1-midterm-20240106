import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterModule } from '@angular/router';
import { Task } from '../../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low'
  };

  constructor(private taskService: TaskService, public router: Router) {}

  addTask(): void {
    this.taskService.addTask(this.task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  onSubmit() {
    this.taskService.addTask(this.task);
    alert('Task Added Successfully!');
    this.router.navigate(['/tasks']);
  }
}