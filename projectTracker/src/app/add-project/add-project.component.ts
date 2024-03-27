import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { Department } from '../models/department.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit {
  constructor(private deparmentService: DepartmentsService,
    private formBuilder: FormBuilder) { }


  departments: Department[] = [];
  addProjectForm: FormGroup;

  ngOnInit(): void {
    this.deparmentService.getDepartments()
      .subscribe(data => this.departments = data);

    this.addProjectForm = this.formBuilder.group({
      name: ['', [Validators.required,
      Validators.minLength(3)
      ]],
      description: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],

    });


  }

  checkName(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('required') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkNameLength(): boolean | undefined {
    console.log('checking name length')
    return this.addProjectForm.get('name')?.hasError('minlength') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkDescription(): boolean | undefined {
    return this.addProjectForm.get('description')?.hasError('required') &&
      this.addProjectForm.get('description')?.dirty;
  }

  checkDepartment(): boolean | undefined {
    return this.addProjectForm.get('departmentId')?.hasError('required') &&
      this.addProjectForm.get('departmentId')?.touched;
  }



  addProject(): void {
    console.log('form durumu', this.addProjectForm.valid)
    if (this.addProjectForm.valid) {
      console.log('Proje Bilgisi: ',this.addProjectForm.value);
    }
  }



}
