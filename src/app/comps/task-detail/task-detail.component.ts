import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { TaskService } from '../../task.service';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }

  // FIX: Added the missing onSave method
  onSave() {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }

  // FIX: Added the missing onBack method
  onBack() {
    this.router.navigate(['/tasks']);
  }
}
