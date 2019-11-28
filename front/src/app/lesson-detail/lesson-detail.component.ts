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

  ANSWER_STATUS = {
    not_answer: 0,
    incorrect: 1,
    correct: 2
  };

  lesson: Lesson = { id: undefined, name: '', percent: 0, detail: { kanji: undefined } };
  currentTopic: any;
  question: {
    topicId: number;
    correct: any;
    answers: Array<any>;
    status: number;
  };
  percentPerQues: number;
  progress: number = 0;

  isCurrent(topic: any): boolean {
    return topic.id === this.currentTopic.id;
  }

  randomIndex(source: Array<any>): number {
    return Math.floor(Math.random() * source.length)
  }

  generateQuestion(): void {
    const availableQuestions: Array<any> = this.lesson.detail.kanji.filter((topic: any) => {
      return topic.status !== this.ANSWER_STATUS.correct;
    });
    this.currentTopic = availableQuestions[this.randomIndex(availableQuestions)];

    document.querySelectorAll('div.answer-box').forEach((ans: any) => {
      ans.classList.remove('incorrect-ans')
      ans.classList.remove('correct-ans');
    });

    let answers = [];

    while (answers.length < 3) {
      const ansIndex = this.randomIndex(this.lesson.detail.kanji)
      if (
        this.lesson.detail.kanji[ansIndex].topic.id !== this.currentTopic.topic.id
           && !answers.map((answer: any) => { return answer.id }).includes(this.lesson.detail.kanji[ansIndex].topic.id)
         ) {
        answers.push(this.lesson.detail.kanji[ansIndex].topic);
      }
    }
    answers.splice(this.randomIndex(answers), 0, this.currentTopic.topic)
    this.question = {
      topicId: this.currentTopic.id,
      correct: this.currentTopic.topic,
      answers: answers,
      status: this.ANSWER_STATUS.not_answer
    }
  }

  answer(ansId: number): void {
    if (this.question.status !== this.ANSWER_STATUS.not_answer) { return; }

    let result: number
    if (ansId === this.question.correct.id) {
      result = this.ANSWER_STATUS.correct;
      this.progress += this.percentPerQues;
    } else {
      result = this.ANSWER_STATUS.incorrect;
      document.querySelector('div.answer-box-' + ansId).classList.add('incorrect-ans');
    }

    this.question.status = result;
    this.lesson.detail.kanji.find((topic: any) => {
      return topic.id === this.currentTopic.id;
    }).status = result;
    document.querySelector('div.answer-box-' + this.question.correct.id).classList.add('correct-ans');
  }

  next(): void {
    if (this.progress < 100) {
      this.generateQuestion();
    }
  }

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierMakerService: NotifierMakerService,
    private statusService: StatusCodeService
  ) { }

  ngOnInit() {
    this.lesson.id = this.route.snapshot.params.id;
    this.lessonService.lesson(this.lesson.id)
      .subscribe((response: {status: string; data: any}) => {
        if (this.statusService.isSuccess(response.status)) {
          this.lesson = response.data.lesson;
          this.percentPerQues = 100 / this.lesson.detail.kanji.length;
          this.generateQuestion();
        } else {
          this.notifierMakerService.notify('Errors!', 'error');
          this.router.navigate(['']);
        }
      });
  }

}
