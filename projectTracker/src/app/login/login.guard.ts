import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

export const loginGuard: CanActivateFn = (route , state) => {
 
  
  inject(UsersService).returnUrl = route.url[0].path;
  if (inject(UsersService).isUserLoggedIn){
    return true;     
  }
  else{
    
    inject(Router).navigate(['login']);
    return false;
  }
};
