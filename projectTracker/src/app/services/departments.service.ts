import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://localhost:7125/api/Departments';
  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err.error);
          return throwError(() => new Error(err.statusText))
        }))
  }

  createNewDepartment(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.url, department)
      .pipe(
        tap(() => console.log('şu anda apinin post fonksiyonu çalıştı ve geriye değer döndü.')),
        catchError((err: HttpErrorResponse) => {
          console.log('hata oluştu', err.message);
          return throwError(() => new Error(err.statusText))
        }));


  }
}
