import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UsersService, private router: Router) { }

  login(userName: string, password: string) {
    this.userService.validateUser(userName, password);
    if (this.userService.isUserLoggedIn && this.userService.returnUrl != undefined) {
      this.router.navigate([this.userService.returnUrl]);
    }

  }

}
