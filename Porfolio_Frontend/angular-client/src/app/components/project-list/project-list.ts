import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  newProject: Project = {
    title: '',
    description: '',
    techStack: '',
    githubUrl: ''
  };

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error(err)
    });
  }

  addProject() {
    this.projectService.addProject(this.newProject).subscribe({
      next: () => {
        this.loadProjects(); // refresh list
        this.newProject = {   // reset form
          title: '',
          description: '',
          techStack: '',
          githubUrl: ''
        };
      },
      error: (err) => console.error(err)
    });
  }

  deleteProject(id?: number) {
    if (!id) return;

    this.projectService.deleteProject(id).subscribe({
      next: () => this.loadProjects(),
      error: err => console.error(err)
    });
  }

}
