import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerBaseComponent } from './timer-base.component';

describe('TimerBaseComponent', () => {
  let component: TimerBaseComponent;
  let fixture: ComponentFixture<TimerBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
