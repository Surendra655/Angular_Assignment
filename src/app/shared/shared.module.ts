import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,SidebarComponent
  ]
})
export class SharedModule { }
