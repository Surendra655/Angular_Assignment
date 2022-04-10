import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerEventTimestampsLogComponent } from './timer-event-timestamps-log.component';

describe('TimerEventTimestampsLogComponent', () => {
  let component: TimerEventTimestampsLogComponent;
  let fixture: ComponentFixture<TimerEventTimestampsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerEventTimestampsLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerEventTimestampsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
