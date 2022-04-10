import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerBaseComponent } from './timer-base/timer-base.component';
import { TimerControlsComponent } from './timer-controls/timer-controls.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerClickEventsLogComponent } from './timer-click-events-log/timer-click-events-log.component';
import { TimerEventTimestampsLogComponent } from './timer-event-timestamps-log/timer-event-timestamps-log.component';

@NgModule({
  declarations: [TimerBaseComponent, TimerControlsComponent, TimerDisplayComponent, TimerClickEventsLogComponent, TimerEventTimestampsLogComponent],
  imports: [
    CommonModule
  ]
})
export class CountdownTimerByInputOutputModule { }
