import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovingBannerTextComponent } from './moving-banner-text/moving-banner-text.component';

const routes: Routes = [
  {
    path: '',
    component: MovingBannerTextComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovingBannerTextRoutingModule { }