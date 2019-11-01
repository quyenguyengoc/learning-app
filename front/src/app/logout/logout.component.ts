import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCheckingService } from '../services/request-checking.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {
  isLoading: Subject<boolean> = this.reqCheckingService.isLoading;

  constructor(private router: Router, private reqCheckingService: RequestCheckingService) { }

  ngOnInit() {
    this.isLoading.next(true);
    localStorage.removeItem('username');
    localStorage.removeItem('user_token');
    this.router.navigate(['/auth/login']);
  }

}
