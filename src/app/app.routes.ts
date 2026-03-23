import { Routes } from '@angular/router';
import { TaskListComponent } from './comps/task-list/task-list.component';
import { TaskDetailComponent } from './comps/task-detail/task-detail.component';

export const routes: Routes = [
    {path: 'tasks', component: TaskListComponent},
    {path: 'tasks/:id', component: TaskDetailComponent}
];
