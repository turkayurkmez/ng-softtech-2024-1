import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retryWhen, throwError } from 'rxjs';
import { Department } from '../models/department.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://localhost:7125/api/Projects';
  getProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url)
                          .pipe(catchError((err:HttpErrorResponse)=>{
                            console.log(err.error);
                            return throwError(()=> new Error(err.statusText))                         
                          }))
  }
}
