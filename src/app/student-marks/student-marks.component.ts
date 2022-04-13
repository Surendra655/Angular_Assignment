import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../shared/services/mock-data.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {
  marks: any[] = []
  tblKeys: any[] = []
  state = 1

  constructor(private _dataServise: MockDataService) { }

  ngOnInit(): void {
    this.getMarks();
  };

  getMarks() {
    this._dataServise.getStudentMarks().subscribe(res => {
      this.marks = res.marks;
      this.tblKeys = Object.keys(res.marks[0]);
    })
  };
  sort(key) {
    switch (this.state) {
      case 1: {
        this.sortType(key, true);
        this.state = 2
        break;
      }
      case 2: {
        this.sortType(key, false);
        this.state = 3
        break;
      }
      default: {
        this.getMarks();
        this.state = 1
        break;
      }
    }
  }
  sortType(key, sortOrder: boolean) {
    if (typeof (key) === typeof (this.marks[0][key])) {
      this.alphabetsSort(key, sortOrder)
    } else {
      this.numericSort(key, sortOrder)
    }
  }
  alphabetsSort(key: any, sortOrder: boolean) {
    if (sortOrder) {
      this.marks.sort((a, b) => a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1)
    } else {
      this.marks.sort((a, b) => a[key].toLowerCase() < b[key].toLowerCase() ? -1 : 1)
    }
  }

  numericSort(key: any, sortOrder: boolean) {
    if (sortOrder) {
      this.marks.sort((a, b) => a[key] < b[key] ? 1 : -1)
    } else {
      this.marks.sort((a, b) => a[key] < b[key] ? -1 : 1)
    }
  }
}