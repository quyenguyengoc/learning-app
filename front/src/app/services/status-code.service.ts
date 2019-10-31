import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StatusCodeService {

  STATUS = {
    ok: 'ok',
    unauthorized: 'unauthorized'
  }

  constructor() { }

  is_success(status: string) {
    return status === this.STATUS.ok;
  }
}
