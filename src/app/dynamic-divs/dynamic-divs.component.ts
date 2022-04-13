import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {
  items = []
  constructor() { }

  ngOnInit(): void {
    this.functionThatGetsItems()
  }
  functionThatGetsItems(val = 20) {
    for (let index = 0; index < val; index++) {
      this.items.push({ id: this.items.length + 1 })
    }
  }

  ngAfterViewInit() {
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.functionThatGetsItems(5)
      }
    };
  }
  divEvent(i){
    alert(`Button in ${i} Div clicked`)
  }
}
