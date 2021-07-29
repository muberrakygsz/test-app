import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekweatherComponent } from './weekweather.component';

describe('WeekweatherComponent', () => {
  let component: WeekweatherComponent;
  let fixture: ComponentFixture<WeekweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekweatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
