import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { StatusCodeService } from './status-code.service';

@Injectable({
  providedIn: 'root'
})
export class RequiredLoginService implements CanActivate {

  loginRequiredScreens(url: string): boolean {
    return !(url.startsWith('/auth'));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user_token = localStorage.getItem('user_token');
    let next_state: string = state.url;
    if (user_token) {
      this.authService.authenticate()
        .subscribe((response: { status: string; data: any } ) => {
          if (this.statusService.is_success(response.status)) {
            if (!this.loginRequiredScreens(state.url)) {
              next_state = '/dashboard';
            }
          } else {
            localStorage.removeItem('user_token');
            localStorage.removeItem('username');
            if (this.loginRequiredScreens(state.url)) {
              next_state = '/auth/login';
            }
          }
          if (next_state !== state.url) {
            this.router.navigate([next_state]);
          }
        })
    } else {
      if (this.loginRequiredScreens(state.url)) {
        next_state = '/auth/login';
      }
      if (next_state !== state.url) {
        this.router.navigate([next_state]);
      }
    }
    return true;
  }

  constructor(
    private router: Router, 
    private authService: AuthenticationService, 
    private statusService: StatusCodeService
  ) { }
}