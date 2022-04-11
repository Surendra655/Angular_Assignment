import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { DynamicDivsRoutingModule } from './dynamic-divs.routing.module';



@NgModule({
  declarations: [DynamicDivsComponent],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule
  ]
})
export class DynamicDivsModule { }
