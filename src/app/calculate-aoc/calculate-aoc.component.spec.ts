import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAocComponent } from './calculate-aoc.component';

describe('CalculateAocComponent', () => {
  let component: CalculateAocComponent;
  let fixture: ComponentFixture<CalculateAocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateAocComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateAocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

