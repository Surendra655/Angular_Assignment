import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMarksComponent } from './student-marks.component';
import { StudentMarksRoutingModule } from './student-marks.routing.module';



@NgModule({
  declarations: [StudentMarksComponent],
  imports: [
    CommonModule,
    StudentMarksRoutingModule
  ]
})
export class StudentMarksModule { }
