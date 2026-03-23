import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';
import { RouterModule, ActivatedRoute } from '@angular/router'; // Added ActivatedRoute
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showActions: boolean = true; // Flag to hide/show buttons

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute // Inject Route
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    
    // Check if the URL has ?view=clean
    this.route.queryParams.subscribe(params => {
      this.showActions = params['view'] !== 'clean';
    });
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks; 
    });
  }

  toggleStatus(task: Task): void {
    this.taskService.toggleStatus(task.id);
    this.loadTasks(); 
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id);
      this.loadTasks();
    }
  }
}
