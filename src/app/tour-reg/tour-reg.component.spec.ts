import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourRegComponent } from './tour-reg.component';

describe('TourRegComponent', () => {
  let component: TourRegComponent;
  let fixture: ComponentFixture<TourRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
