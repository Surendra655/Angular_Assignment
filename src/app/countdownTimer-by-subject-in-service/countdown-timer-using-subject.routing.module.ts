import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerBaseComponent } from './timer-base-screen/timer-base.component';

const routes: Routes = [
  {
    path: '',
    component: TimerBaseComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownBySubjectRoutingModule { }