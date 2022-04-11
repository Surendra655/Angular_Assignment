import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovingBannerTextComponent } from './moving-banner-text/moving-banner-text.component';
import { MovingBannerTextRoutingModule } from './floating-text.routing.module';



@NgModule({
  declarations: [MovingBannerTextComponent],
  imports: [
    CommonModule,
    MovingBannerTextRoutingModule
  ]
})
export class FloatingTextModule { }
