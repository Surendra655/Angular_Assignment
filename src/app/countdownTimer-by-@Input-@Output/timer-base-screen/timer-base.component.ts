import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-timer-base',
  templateUrl: './timer-base.component.html',
  styleUrls: ['./timer-base.component.scss'],
  providers: [DatePipe]

})
export class TimerBaseComponent implements OnInit {
  timeLeft: number;
  interval: any;
  resetStateValue = 0;
  pausedList: any[] = [];
  timerEvents: any[] = [];
  clicksCount = { stated: 0, paused: 0 };

  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {

var obj=[
  {price:50,
  item:'acar'},
  {price:50,
    item:'acar'},
    {price:65,
      item:'ccycle'},
      {price:45,
        item:'bike'}
];
console.log(obj.sort((a, b) => a.price > b.price ? 1 : -1));

let source=[...obj];
// console.log(obj)
// console.log(source.sort((a, b) => a.item.toLowerCase() < b.item.toLowerCase() ? 1 : -1))
   }

  // For fetching Count down value from child component
  getTimeLimit(val: number): void {
    this.timeLeft = val;
  }

  // To start count down
  startTimer(): void {
    this.timeStampLogs('Started');
    this.clicksCount.stated++;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        // this.resetStateValue= this.timeLeft
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  // For generating event logs with timestamp
  timeStampLogs(e): void {
    if (this.timeLeft && e) {
      this.timerEvents.push(`${e} at ${this.datepipe.transform(new Date(), 'd-M-y h:mm:ss a')}`);
      this.pausedList.push(`${e} at ${this.timeLeft}`);
    }
  }

  clearLogs(): void {
    this.timerEvents.length = 0;
    this.pausedList.length = 0;
    this.clicksCount.paused = 0;
    this.clicksCount.stated = 0;
  }

  // To Pause & Reset timer
  pauseOrReset(reset = false): void {
    // For clearing interval to get timer Pause state
    clearInterval(this.interval);
    //  For reseting the timer state to 0
    if (reset) {
      this.timeStampLogs('Reset');
      this.timeLeft = 0;
    } else {
      this.timeStampLogs('Paused');
      this.clicksCount.paused++;
    }
  }




}