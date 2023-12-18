import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDataComponent } from './charts-data.component';

describe('ChartsDataComponent', () => {
  let component: ChartsDataComponent;
  let fixture: ComponentFixture<ChartsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsDataComponent]
    });
    fixture = TestBed.createComponent(ChartsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
