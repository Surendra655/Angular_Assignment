import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-moving-banner-text',
  templateUrl: './moving-banner-text.component.html',
  styleUrls: ['./moving-banner-text.component.scss']
})
export class MovingBannerTextComponent implements OnInit {
  newTitleElem: any;
  @ViewChild('titleContainer', { static: true }) public titleContainer: any;

  constructor() { }

  ngOnInit(): void {
    this.newTitleElem = document.createElement('div');
    // this.newTitleElem.innerHTML = `<div style='width: calc(100% - 0%);border: 3px solid black;padding: 25px;'></div>`;
    // this.titleContainer.nativeElement.add(this.newTitleElem);

    // this.newTitleElem = document.createElement('div');
    // this.newTitleElem.innerHTML = `<div style='width: calc(100% - 0%);border: 3px solid black;padding: 25px;'></div>`;
    // this.titleContainer.nativeElement.appendChild(this.newTitleElem);
    
      // var maindiv = document.getElementById('container');
      // for (var x = 0; x < 9; x++) {
      //   maindiv.innerHTML = `<div style='
      //   width: calc(100% - 0%);
      //   border: 3px solid black;
      //   padding: 25px;' id=${x}></div>`;
      //   let temp = document.getElementById(x.toString());
      //   temp.innerHTML = `<div style='
      //   width: calc(100% - 0%);
      //   border: 3px solid black;
      //   padding: 25px;' id=${x - 1}></div>`;
      //   temp.appendChild(this.newTitleElem)
      //   console.log(maindiv.innerHTML)

      // }

  }

}
