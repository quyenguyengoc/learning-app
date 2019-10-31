import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RequestCheckingService } from 'src/app/services/request-checking.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public responseWaiting: Subject<boolean> = this.reqCheckingService.isLoading;

  constructor(private reqCheckingService: RequestCheckingService) { }

  ngOnInit() { }

}
