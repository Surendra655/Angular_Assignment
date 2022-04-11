import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
menuItems:any=[]
  constructor() { }

  ngOnInit(): void {
    this.menuItems=[
      { menu:'Floating Text',path:''},
      { menu:'Products Category',path:''},
      { menu:'Countdown Timer By I/O',path:''},
      { menu:'Countdown Timer By Subject',path:''},
      { menu:'Student Marks Table',path:''},
      { menu:"Dynamic Div's",path:''}
    ]
  }

}
