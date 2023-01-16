import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { StatusCodeService } from '../services/status-code.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { Lesson } from '../classes/lesson';
import { KanjiTopic } from '../classes/kanji_topic';

declare var Dmak: any;

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson;
  currentTopic: KanjiTopic;
  dmak: any;

  randomIndex(source: Array<any>): number {
    return Math.floor(Math.random() * source.length)
  }

  generateTopic(kanji: KanjiTopic): void {
    if (this.currentTopic && kanji.id === this.currentTopic.id) { return; }
    this.currentTopic = kanji;
    if (document.querySelector('div#draw')) {
      document.querySelector('div#draw').firstChild.remove();
    }
    this.dmak = new Dmak(this.currentTopic.topic.kanji_text, {
      element: 'draw',
      uri: 'assets/kanji/',
      width: 300,
      height: 300,
      stroke: {
        order: {
          visible: true
        }
      }
    });
  }

  constructor(
    private lessonService: LessonService,
    private statusService: StatusCodeService,
    private notifierMakerService: NotifierMakerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const lessonID: number = this.route.snapshot.params.id;
    this.lessonService.lesson(lessonID)
      .subscribe((response: { status: string; data: any } ) => {
        if (this.statusService.isSuccess(response.status)) {
          this.lesson = new Lesson(response.data.lesson);
          this.generateTopic(this.lesson.detail.kanji[0]);
          console.log(this.currentTopic.topic)
        } else {
          this.notifierMakerService.notify('Errors!', 'error');
          this.router.navigate(['']);
        }
      })
  }

}
