import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { DepartmentsMenuComponent } from './departments-menu/departments-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    DepartmentsMenuComponent,
    ProjectListComponent,
    ProjectComponent,
    TaskListComponent,  
    SearchPipe, AddDepartmentComponent, AddProjectComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
