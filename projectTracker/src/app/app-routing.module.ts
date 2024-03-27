import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { loginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'tumProjeler',component:ProjectListComponent},
  {path:'projeler/kategori/:id',component:ProjectListComponent},
  {path:'departmanEkle', component:AddDepartmentComponent, canActivate:[loginGuard]},
  {path:'projeEkle', component:AddProjectComponent, canActivate:[loginGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
