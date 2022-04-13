import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-timer-base',
  templateUrl: './timer-base.component.html',
  styleUrls: ['./timer-base.component.scss']
})
export class TimerBaseComponent implements OnInit {
  timeLeft: number;
  interval: any;
  pausedList: any[] = [];
  timerEvents: any[] = [];
  clicksCount = { stated: 0, paused: 0 };

  constructor(private datepipe: DatePipe,
              private dataService: DataSharingService) { }

  ngOnInit(): void {
    this.startListeningEvents();
  }

  startListeningEvents(): void {
    this.dataService.controllerData$.subscribe((res) => {
      if (res.eventName === 'Start') {
        this.timeLeft = res.countDownValue;
        this.streamCountDownValueToDisplay();
        this.startTimer();
      } else if (res.eventName === 'resetOrPause') {
        this.pauseOrReset(res.resetOrPause);
      }
    });
  }

  streamCountDownValueToDisplay(): void {
    this.dataService.SetDisplayData(this.timeLeft);
  }

  // To start count down
  startTimer(): void {
    this.setEventLogs('Started');
    this.clicksCount.stated++;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.streamCountDownValueToDisplay();
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  // For generating event logs with timestamp
  setEventLogs(e: any): void{
    if (this.timeLeft && e) {
      this.timerEvents.push(`${e} at ${this.datepipe.transform(new Date(), 'd-M-y h:mm:ss a')}`);
      this.pausedList.push(`${e} at ${this.timeLeft}`);
      this.streamLogEvents();
    }
  }
  streamLogEvents(): void{
    const obj = {
      timeStampLogs: this.timerEvents,
      pausedLogs: this.pausedList,
      clicksLog: this.clicksCount
    };
    this.dataService.setMainTimerData(obj);
  }
  clearLogs(): any{
    this.timerEvents.length = 0;
    this.pausedList.length = 0;
    this.clicksCount.paused = 0;
    this.clicksCount.stated = 0;
    this.streamLogEvents();
  }
  // To Pause & Reset timer
  pauseOrReset(reset = false): void {
    // For clearing interval to get timer Pause state
    clearInterval(this.interval);
    //  For reseting the timer state to 0
    if (reset) {
      this.setEventLogs('Reset');
      this.timeLeft = 0;
      this.streamCountDownValueToDisplay();
    } else {
      this.setEventLogs('Paused');
      this.clicksCount.paused++;
    }
  }
}
