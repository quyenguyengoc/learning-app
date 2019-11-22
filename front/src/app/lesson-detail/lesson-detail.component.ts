import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusCodeService } from '../services/status-code.service';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { Lesson } from '../interfaces/lesson';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {


  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierMakerService: NotifierMakerService,
    private statusService: StatusCodeService
  ) { }

  ngOnInit() {
    // this.lesson.lesson_id = this.route.snapshot.params.id;
  }

}
