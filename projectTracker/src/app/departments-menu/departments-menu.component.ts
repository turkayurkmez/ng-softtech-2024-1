import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mocks';
import { HttpClient } from '@angular/common/http';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-departments-menu',
  templateUrl: './departments-menu.component.html',
  styleUrl: './departments-menu.component.css'
})
export class DepartmentsMenuComponent implements OnInit {

  departments: Department[] = departments

  constructor(private departmentService: DepartmentsService) {
  }
  ngOnInit(): void {
      this.departmentService.getDepartments()
                            .subscribe(data => this.departments = data);
  }


}
