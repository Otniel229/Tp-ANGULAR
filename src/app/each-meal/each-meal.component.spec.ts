import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachMealComponent } from './each-meal.component';

describe('EachMealComponent', () => {
  let component: EachMealComponent;
  let fixture: ComponentFixture<EachMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
