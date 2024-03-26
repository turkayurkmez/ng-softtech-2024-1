import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock'
import { ProjectServiceService } from '../services/project-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  searchKey: string = '';

  constructor(private projectService: ProjectServiceService) { }
  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(data => this.projects = data);
  }




}
