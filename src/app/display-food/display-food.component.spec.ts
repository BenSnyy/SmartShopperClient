import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodComponent } from './display-food.component';

describe('DisplayFoodComponent', () => {
  let component: DisplayFoodComponent;
  let fixture: ComponentFixture<DisplayFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
