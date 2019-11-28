import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { StatusCodeService } from '../services/status-code.service';
import { Router } from '@angular/router';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { Lesson } from '../interfaces/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessons: [Lesson];

  constructor(
    private lessonService: LessonService,
    private statusService: StatusCodeService,
    private notifierMakerService: NotifierMakerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lessonService.lessons()
      .subscribe((response: {status: string; data: any}) => {
        if (this.statusService.isSuccess(response.status)) {
          this.lessons = response.data.lessons;
        } else {
          this.notifierMakerService.notify('Errors!', 'error');
          this.router.navigate(['']);
        }
      });
  }

}
