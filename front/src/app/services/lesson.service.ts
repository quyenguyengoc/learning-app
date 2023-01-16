import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lessons(): Observable<{status: string; data: any}> {
    return this.http.get<{status: string; data: any}>(API_URL + '/lessons')
  }

  lesson(id: number): Observable<{status: string; data: any}> {
    return this.http.get<{status: string; data: any}>(API_URL + '/lessons/' + id)
  }

  constructor(private http: HttpClient) { }
}
