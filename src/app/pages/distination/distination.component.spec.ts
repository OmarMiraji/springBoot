import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinationComponent } from './distination.component';

describe('DistinationComponent', () => {
  let component: DistinationComponent;
  let fixture: ComponentFixture<DistinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
