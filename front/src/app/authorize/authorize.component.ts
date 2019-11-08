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

  constructor(private notifier: NotifierService, private notifierMakerService: NotifierMakerService) {
    this.notifier.hideAll();
    this.notifierMakerService.notifier.subscribe((notifier: { content: string; type: string } ) => {
      if (notifier) {
        const content = notifier.content;
        const type = notifier.type;
        this.notifier.notify(type, content);
        this.notifierMakerService.notifier.next(undefined);
      }
    })
  }

  ngOnInit() { }

}
