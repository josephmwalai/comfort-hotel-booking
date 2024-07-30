import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCalendarComponent } from './booking-calendar.component';

describe('BookingCalendarComponent', () => {
  let component: BookingCalendarComponent;
  let fixture: ComponentFixture<BookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
