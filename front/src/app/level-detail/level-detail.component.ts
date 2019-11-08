import { Component, OnInit } from '@angular/core';
import { LevelService } from '../services/level.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusCodeService } from '../services/status-code.service';
import { NotifierMakerService } from '../services/notifier-maker.service';
import { Level } from '../interfaces/level';

@Component({
  selector: 'app-level-detail',
  templateUrl: './level-detail.component.html',
  styleUrls: ['./level-detail.component.scss']
})
export class LevelDetailComponent implements OnInit {

  topic: string = 'vocab';
  level: Level = { level_id: undefined, label: undefined };
  data : { vocabs: []; grammars: []; kanjis: [] } = { vocabs: [], grammars: [], kanjis: [] }

  isVocab() {
    return this.topic === 'vocab';
  }

  isGrammar() {
    return this.topic === 'grammar';
  }

  isKanji() {
    return this.topic === 'kanji';
  }

  filterByTopic() {
    this.levelService.level(this.level.level_id)
      .subscribe((response: { status: string; data: any }) => {
        if (this.statusService.isSuccess(response.status)) {
          this.data = response.data;
        } else {
          this.notifierMakerService.notify('Errors!', 'error');
          this.router.navigate(['']);
        }
      });
  }

  topicChanged(topic: string) {
    if (topic !== this.topic) {
      this.topic = topic;
    }
  }

  constructor(
    private levelService: LevelService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierMakerService: NotifierMakerService,
    private statusService: StatusCodeService
  ) { }

  ngOnInit() {
    this.level.level_id = this.route.snapshot.params.id;
    this.filterByTopic();
  }

}
