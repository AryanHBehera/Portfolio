import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'projects', component: ProjectsComponent }
];
