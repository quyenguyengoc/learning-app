import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { RequestCheckingService } from './services/request-checking.service';

@Injectable()
export class SpinnerInterCeptor implements HttpInterceptor {
  constructor(private reqCheckingService: RequestCheckingService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.reqCheckingService.onRequesting();
    return next.handle(req).pipe(
      finalize(() => this.reqCheckingService.responsed())
    );
  }
}