import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimerBaseComponent } from './timer-base-screen/timer-base.component';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerClicksCountLogsComponent } from './timer-clicks-count-logs/timer-clicks-count-logs.component';
import { TimerEventTimestampLogsComponent } from './timer-event-timestamp-logs/timer-event-timestamp-logs.component';
import { CountdownBySubjectRoutingModule } from './countdown-timer-using-subject.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TimerBaseComponent,TimerControlsComponent,TimerDisplayComponent,TimerClicksCountLogsComponent,TimerEventTimestampLogsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountdownBySubjectRoutingModule
  ],
  providers: [DatePipe]
})
export class CountdownTimerBySubjectInServiceModule { }
