import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../shared/services/mock-data.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss']
})
export class StudentMarksComponent implements OnInit {

  constructor(private _dataServise: MockDataService) { }

  ngOnInit(): void {
    this._dataServise.getStudentMarks().subscribe(res => {
      console.log(res)
    })
  }
sort(){
  // console.log(source.sort((a, b) => a.item.toLowerCase() < b.item.toLowerCase() ? 1 : -1))

}
}
