import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://localhost:7125/api/Departments';
  getDepartments():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.url)
                          .pipe(catchError((err:HttpErrorResponse)=>{
                            console.log(err.error);
                            return throwError(()=> new Error(err.statusText))                         
                          }))
  }
}
