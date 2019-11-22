import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  lesson(params: { lesson_id: number, topic: string }): Observable<{status: string; data: any}> {
    let topic = new HttpParams().set('topic', params.topic);
    return this.http.get<{status: string; data: any}>(API_URL + '/lessons/' + params.lesson_id, { params: topic })
  }

  constructor(private http: HttpClient) { }
}
