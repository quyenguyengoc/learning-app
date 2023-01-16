import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LessonDetailService {

  updateLevel(params: {lessonID: number; lessonDetail: any}): Observable<{status: string; data: any}> {
    return this.http.put<{status: string; data: any}>(API_URL + '/lessons/' + params.lessonID + '/lesson_details/' + params.lessonDetail.id, { lesson_detail: params.lessonDetail })
  }

  constructor(private http: HttpClient) { }
}
