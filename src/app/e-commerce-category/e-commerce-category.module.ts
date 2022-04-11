import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { EcommerceRoutingModule } from './e-commerce.routing.module';



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class ECommerceCategoryModule { }
