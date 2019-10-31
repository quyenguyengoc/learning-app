import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestCheckingService {
  isLoading: Subject<boolean> = new Subject<boolean>();

  onRequesting() {
    this.isLoading.next(true);
  }

  responsed() {
    this.isLoading.next(false);
  }

  constructor() { }
}
