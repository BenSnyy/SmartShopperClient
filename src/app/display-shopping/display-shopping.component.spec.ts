import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayShoppingComponent } from './display-shopping.component';

describe('DisplayShoppingComponent', () => {
  let component: DisplayShoppingComponent;
  let fixture: ComponentFixture<DisplayShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
