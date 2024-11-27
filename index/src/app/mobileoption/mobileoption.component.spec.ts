import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileoptionComponent } from './mobileoption.component';

describe('MobileoptionComponent', () => {
  let component: MobileoptionComponent;
  let fixture: ComponentFixture<MobileoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileoptionComponent]
    });
    fixture = TestBed.createComponent(MobileoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
