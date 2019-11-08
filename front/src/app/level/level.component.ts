import { Component, OnInit } from '@angular/core';
import { LevelService } from '../services/level.service';
import { StatusCodeService } from '../services/status-code.service';
import { Router } from '@angular/router';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { Level } from '../interfaces/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  
  levels: [Level];

  constructor(
    private levelService: LevelService,
    private statusService: StatusCodeService,
    private notifierMakerService: NotifierMakerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.levelService.levels()
      .subscribe((response: {status: string; data: any}) => {
        if (this.statusService.isSuccess(response.status)) {
          this.levels = response.data.levels;
        } else {
          this.notifierMakerService.notify('Errors!', 'error');
          this.router.navigate(['']);
        }
      });
  }

}
