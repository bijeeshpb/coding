import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiretvComponent } from './firetv.component';

describe('FiretvComponent', () => {
  let component: FiretvComponent;
  let fixture: ComponentFixture<FiretvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiretvComponent]
    });
    fixture = TestBed.createComponent(FiretvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
