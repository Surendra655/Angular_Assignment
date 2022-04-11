import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss']
})
export class TimerControlsComponent implements OnInit {
  countdown: number;
  isCounterActive = true;
  @Input() pausedList: any[] = [];
  @Input() resetStateValue: number;
  @Output() startTimer = new EventEmitter();
  @Output() timeLeft = new EventEmitter<number>();
  @Output() pauseOrReset = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes || changes['resetStateValue'].currentValue === 0) {
      this.countdown = this.resetStateValue;
      if (this.resetStateValue === 0) {
        this.countdown = undefined;
        this.isCounterActive = true;
      }
    }
  }
  startCountdown() {
    if (this.countdown) {
      this.timeLeft.emit(this.countdown)
      this.startTimer.emit();
      this.isCounterActive = false;
    } else {
      alert('Please Enter countdown value to start !!!');
    }
  }
}