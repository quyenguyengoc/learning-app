import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service'
import { StatusCodeService } from '../services/status-code.service';
import { RequestCheckingService } from '../services/request-checking.service';
import { NotifierMakerService } from '../services/notifier-maker.service';

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

  constructor(
    private authService: AuthenticationService,
    private statusService: StatusCodeService,
    private router: Router,
    private route: ActivatedRoute,
    private reqCheckingService: RequestCheckingService,
    private notifierMakerService: NotifierMakerService
  ) { }

  ngOnInit() {
    this.reqCheckingService.isLoading.next(false);
  }

  login(event: any) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    this.authService.login(username, password).subscribe((response: {status: string; data: any}) => {
      if (this.statusService.is_success(response.status)) {
        localStorage.setItem('user_token', response.data.token);
        localStorage.setItem('username', response.data.username);
        this.notifierMakerService.notify('Login successfully!', 'success');
        this.router.navigate([this.route.snapshot.queryParams.redirectTo]);
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
