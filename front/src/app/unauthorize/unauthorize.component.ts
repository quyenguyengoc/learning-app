import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { NotifierMakerService } from '../services/notifier-maker.service';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.scss']
})
export class UnauthorizeComponent implements OnInit {
  notify: BehaviorSubject<{ content: string; type: string }> = this.notifierMakerService.notifier;

  constructor(private notifier: NotifierService, private notifierMakerService: NotifierMakerService) {
    this.notifier.hideAll();
    if (this.notify.value) {
      const content = this.notify.value.content;
      const type = this.notify.value.type;
      this.notifier.notify(type, content);
      this.notify.next(undefined);
    }
  }

  ngOnInit() {
  }

}
