import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})

export class AuthorizeComponent implements OnInit {
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

  ngOnInit() { }

}
