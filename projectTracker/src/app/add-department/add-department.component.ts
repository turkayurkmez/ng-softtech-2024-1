import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {

  formIsInvalid: boolean = false;
  department: Department = new Department();
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);

    }else{
      console.log('form hatalı!',form.errors);
      console.log(form.getError('required'));
      console.log(form.control);
      this.formIsInvalid = true;
    }
  }

}
