import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/floating-text", pathMatch: "full" },
  // {
  //   path: '', 
  //   loadChildren: () => import('./floating-text/floating-text.module').then(m => m.FloatingTextModule)
  // },
  {
    path: 'floating-text',
    loadChildren: () => import('./floating-text/floating-text.module').then(m => m.FloatingTextModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./e-commerce-category/e-commerce-category.module').then(m => m.ECommerceCategoryModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./countdownTimer-by-@Input-@Output/countdown-timer-by-input-output.module').then(m => m.CountdownTimerByInputOutputModule)
  },
  {
    path: 'countdowntimer-with-subject',
    loadChildren: () => import('./countdownTimer-by-subject-in-service/countdown-timer-by-subject-in-service.module').then(m => m.CountdownTimerBySubjectInServiceModule)
  },
  {
    path: 'student-marks',
    loadChildren: () => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule)
  },
  {
    path: 'dynamic-divs',
    loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
