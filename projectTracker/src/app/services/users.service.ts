import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  isUserLoggedIn: boolean = false;
  returnUrl: string;

  validateUser(userName: string, password:string){
    if (userName=='admin' && password=='123') {
      this.isUserLoggedIn = true;
    }
  }
}
