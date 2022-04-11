import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'timer',
    loadChildren: () => import('./countdownTimer-by-@Input-@Output/countdown-timer-by-input-output.module').then(m => m.CountdownTimerByInputOutputModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
