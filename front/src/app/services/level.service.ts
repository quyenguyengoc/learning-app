import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  levels(): Observable<{status: string; data: any}> {
    return this.http.get<{status: string; data: any}>(API_URL + '/levels')
  }

  level(level_id: number): Observable<{status: string; data: any}> {
    return this.http.get<{status: string; data: any}>(API_URL + '/levels/' + level_id)
  }

  constructor(private http: HttpClient) { }
}
