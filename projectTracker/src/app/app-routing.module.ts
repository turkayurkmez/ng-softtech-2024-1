import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'tumProjeler',component:ProjectListComponent},
  {path:'departmanEkle', component:AddDepartmentComponent},
  {path:'projeEkle', component:AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
