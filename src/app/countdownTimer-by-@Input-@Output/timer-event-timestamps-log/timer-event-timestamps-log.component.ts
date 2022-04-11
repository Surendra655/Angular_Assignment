import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-logs',
  templateUrl: './timer-event-timestamps-log.component.html',
  styleUrls: ['./timer-event-timestamps-log.component.scss']
})
export class TimerEventTimestampsLogComponent implements OnInit {
  @Input() eventLogs:any[]=[]
  constructor() { }

  ngOnInit(): void {
    
  }

}
