import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}
