import { AfterContentChecked, Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements AfterContentChecked {

  @Input('currentProject') project?: Project;


  incompletedTasksCount?: number = 0;
  isTasksFound:boolean = true;
  constructor() {

  }
  ngAfterContentChecked(): void {
    this.incompletedTasksCount = this.project?.tasks?.filter(t => !t.isDone).length;
    this.isTasksFound = this.incompletedTasksCount != undefined && this.incompletedTasksCount>0;
  }

}
