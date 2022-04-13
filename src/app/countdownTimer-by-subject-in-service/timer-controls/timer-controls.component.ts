import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent implements OnInit {
  countDownValue: number;
  isActiveTimer = true;
  eventLogs: any[] = [];
  outGoingModel = {
    eventName: null,
    countDownValue: null,
    resetOrPause: null
  };
  constructor(private _dataService: DataSharingService) { }
  ngOnInit(): void {
    this.listenDisplayValue();
    this.listenEventLogs();
  }

  startTimer(): void {
    if (this.countDownValue !== 0 && this.countDownValue) {
      this.isActiveTimer = false;
      this.outGoingModel.countDownValue = this.countDownValue;
      this.outGoingModel.eventName = 'Start';
      this._dataService.SetControllerData(this.outGoingModel);
    } else {
      alert('Please enter Count down Value !!!');
    }

  }
  resetOrPause(e): void {
    this.isActiveTimer = true;
    this.outGoingModel.resetOrPause = e;
    this.outGoingModel.eventName = 'resetOrPause';
    this._dataService.SetControllerData(this.outGoingModel);
    if (e) {
      this.countDownValue = undefined;
    }
  }
  listenDisplayValue(): void {
    this._dataService.displayData$.subscribe((res) => {
      this.countDownValue = res;
    });
  }

  listenEventLogs(): void {
    this._dataService.mainTimer$.subscribe((res) => {
      this.eventLogs = res.pausedLogs;
    });
  }
}
