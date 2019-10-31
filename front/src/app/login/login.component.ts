import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service'
import { StatusCodeService } from '../services/status-code.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error_messages: { username: Array<string>; password: Array<string>; login_fail: any } = {
    username: [],
    password: [],
    login_fail: undefined
  }

  constructor(private authService: AuthenticationService, private statusService: StatusCodeService, private router: Router) { }

  ngOnInit() {
  }

  login(event: any) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    this.authService.login(username, password).subscribe((response: {status: string; data: any}) => {
      if (this.statusService.is_success(response.status)) {
        localStorage.setItem('user_token', response.data.token);
        localStorage.setItem('username', response.data.username);
        this.router.navigate(['/'])
      } else {
        if (response.data.message.attributes) {
          this.error_messages = {
            login_fail: undefined,
            username: response.data.message.attributes.username || [],
            password: response.data.message.attributes.password || []
          }
        } else {
          this.error_messages = {
            login_fail: response.data.message,
            username: [],
            password: []
          }
        }
      }
    })
  }

}
