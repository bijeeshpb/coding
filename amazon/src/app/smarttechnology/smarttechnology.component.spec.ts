import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarttechnologyComponent } from './smarttechnology.component';

describe('SmarttechnologyComponent', () => {
  let component: SmarttechnologyComponent;
  let fixture: ComponentFixture<SmarttechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmarttechnologyComponent]
    });
    fixture = TestBed.createComponent(SmarttechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
