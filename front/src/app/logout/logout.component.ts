import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestCheckingService } from '../services/request-checking.service';
import { Subject } from 'rxjs';
import { NotifierMakerService } from '../services/notifier-maker.service';


@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private reqCheckingService: RequestCheckingService,
    private notifierMakerService: NotifierMakerService
    ) { }

  ngOnInit() {
    this.reqCheckingService.isLoading.next(true);
    localStorage.removeItem('username');
    localStorage.removeItem('user_token');
    this.notifierMakerService.notify('Logout successfully!', 'success');
    this.router.navigate(['/auth/login']);
  }

}
