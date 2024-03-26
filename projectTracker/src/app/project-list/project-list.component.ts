import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] =  projects;

  
}
