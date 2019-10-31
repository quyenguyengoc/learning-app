import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthorizeService implements CanActivate {

  canActivate() {
    if(localStorage.getItem('user_token')) {
      this.router.navigate(['/']);
      return false
    }
    return true;
  }

  constructor(private router: Router) { }
}