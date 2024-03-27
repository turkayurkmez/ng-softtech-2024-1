import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {

  formIsInvalid: boolean = false;
  department: Department = new Department();

  constructor(private departmantService: DepartmentsService){}

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.department = form.value;
      this.departmantService.createNewDepartment(this.department)
                            .subscribe(x=>console.log(x.name, 'departmanı eklendi'));


    //hile yaparak sayfayı refresh ettik:                         
    location = location;
                            

    }else{
      console.log('form hatalı!',form.errors);
      console.log(form.getError('required'));
      console.log(form.control);
      this.formIsInvalid = true;
    }
  }

}
