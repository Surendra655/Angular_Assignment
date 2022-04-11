import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  @Input() timeLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
