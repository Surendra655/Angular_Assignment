import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerClickEventsLogComponent } from './timer-click-events-log.component';

describe('TimerClickEventsLogComponent', () => {
  let component: TimerClickEventsLogComponent;
  let fixture: ComponentFixture<TimerClickEventsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerClickEventsLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerClickEventsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
