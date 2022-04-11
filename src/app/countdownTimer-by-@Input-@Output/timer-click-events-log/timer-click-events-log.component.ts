import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-clicks ',
  templateUrl: './timer-click-events-log.component.html',
  styleUrls: ['./timer-click-events-log.component.scss']
})
export class TimerClickEventsLogComponent implements OnInit {
  @Input() clicksCount:any
  constructor() { }

  ngOnInit(): void {
  }

}