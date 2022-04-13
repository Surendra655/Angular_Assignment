import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-clicks',
  templateUrl: './timer-clicks-count-logs.component.html',
  styleUrls: ['./timer-clicks-count-logs.component.scss']
})
export class TimerClicksCountLogsComponent implements OnInit {
  eventLogs: any;

  constructor(private _dataService: DataSharingService) { }

  ngOnInit(): void {
    this.listenEventLogs();
  }
  listenEventLogs(): void {
    this._dataService.mainTimer$.subscribe((res) => {
      this.eventLogs = res.clicksLog;
    });
  }
}