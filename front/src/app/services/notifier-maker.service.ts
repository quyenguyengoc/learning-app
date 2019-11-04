import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifierMakerService {
  public notifier: BehaviorSubject<{ content: string; type: string }> = new BehaviorSubject<any>(undefined);

  constructor() { }

  notify(content: string, type: string) {
    this.notifier.next({
      content: content,
      type: type
    })
    
  }
}
