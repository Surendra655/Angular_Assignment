import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerBaseComponent } from './timer-base-screen/timer-base.component';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerClicksCountLogsComponent } from './timer-clicks-count-logs/timer-clicks-count-logs.component';
import { TimerEventTimestampLogsComponent } from './timer-event-timestamp-logs/timer-event-timestamp-logs.component';



@NgModule({
  declarations: [TimerBaseComponent,TimerControlsComponent,TimerDisplayComponent,TimerClicksCountLogsComponent,TimerEventTimestampLogsComponent],
  imports: [
    CommonModule
  ]
})
export class CountdownTimerBySubjectInServiceModule { }
