import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { StatusCodeService } from '../services/status-code.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})

export class AuthorizeComponent implements OnInit {

  constructor(private authService: AuthenticationService, private statusService: StatusCodeService, private router: Router) { }

  ngOnInit() {
    this.authService.authenticate()
      .subscribe((response: { status: string; data: any}) => {
        if (!this.statusService.is_success(response.status)) {
          localStorage.removeItem('user_token');
          localStorage.removeItem('username');
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
