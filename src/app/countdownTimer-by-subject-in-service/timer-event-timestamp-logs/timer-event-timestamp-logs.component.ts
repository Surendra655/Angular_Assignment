import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timer-event-timestamp-logs.component.html',
  styleUrls: ['./timer-event-timestamp-logs.component.scss']
})
export class TimerEventTimestampLogsComponent implements OnInit {
  constructor(private _dataService: DataSharingService) { }
  timeStamps: any[] = [];
  ngOnInit(): void {
    this.listenTimeStampLogs();
  }
  listenTimeStampLogs(): void {
    this._dataService.mainTimer$.subscribe((res) => {
      this.timeStamps = res.timeStampLogs;
    });
  }
}