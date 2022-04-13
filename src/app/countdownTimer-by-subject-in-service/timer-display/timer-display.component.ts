import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';

@Component({
  selector: 'app-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {

  counterValue: number;
  constructor(private _dataService: DataSharingService) { }

  ngOnInit(): void {
    this.listenDisplayValue();
  }

  listenDisplayValue(): void {
    this._dataService.displayData$.subscribe((res) => {
      this.counterValue = res;
    });
  }
}
