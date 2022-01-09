import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      // this.router.navigate(['/dashboard']);
      return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/login']);
    return false;
  }

  public isLoggedIn(): boolean {
    // console.log(localStorage.getItem('isLoggedIn'));
    // console.log(localStorage.getItem('name'));
    // console.log(localStorage.getItem('token'));
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    } else {
      status = false;
    }
    return status;
  }

}
