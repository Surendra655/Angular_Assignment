import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { EcommerceRoutingModule } from './e-commerce.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FormsModule
  ]
})
export class ECommerceCategoryModule { }
