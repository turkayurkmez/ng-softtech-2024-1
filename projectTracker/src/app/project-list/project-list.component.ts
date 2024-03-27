import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/projects.mock'
import { ProjectServiceService } from '../services/project-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  searchKey: string = '';

  constructor(private projectService: ProjectServiceService,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {



    this.projectService.getProjects()
      .subscribe(data => {
        this.activeRoute.params.subscribe(routeParam => {
          console.log(routeParam['id']);
          this.projects = data;
          if (routeParam['id'] != undefined) {
            this.projects = this.projects.filter(p => p.departmentId == routeParam['id']);
          }
        });
      });
  }




}
