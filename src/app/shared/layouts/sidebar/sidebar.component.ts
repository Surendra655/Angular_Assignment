import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any = []
  isActive = 0
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuItems = [
      { menu: 'Floating Text', path: 'floating-text' },
      { menu: 'Products Category', path: 'products' },
      { menu: 'Countdown Timer By I/O', path: 'timer' },
      { menu: 'Countdown Timer By Subject', path: 'timer-with-subject' },
      { menu: 'Student Marks Table', path: 'student-marks' },
      { menu: "Dynamic Div's", path: 'dynamic-divs' }
    ]
  }
  navigate(i:number, path:string) {
    this.isActive = i;
    this.router.navigate([path])
  }
}
