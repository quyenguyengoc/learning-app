import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login(username: string, password: string): Observable<{status: string; data: any}> {
    return this.http
             .post<any>(API_URL + '/login', { login: { username: username, password: password } })
  }

  authenticate(): Observable<{status: string; data: any}> {
    return this.http.get<any>(API_URL + '/auth');
  }

  constructor(private http: HttpClient) { }
}
