import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Router, RouterModule } from '@angular/router';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    status: 'Pending',
    priority: 'Low'
  };

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    this.taskService.addTask(this.task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}