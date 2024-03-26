import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mocks';

@Component({
  selector: 'app-departments-menu',
  templateUrl: './departments-menu.component.html',
  styleUrl: './departments-menu.component.css'
})
export class DepartmentsMenuComponent {
    departments: Department[] = departments
}
