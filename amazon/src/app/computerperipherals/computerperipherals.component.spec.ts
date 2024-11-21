import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerperipheralsComponent } from './computerperipherals.component';

describe('ComputerperipheralsComponent', () => {
  let component: ComputerperipheralsComponent;
  let fixture: ComponentFixture<ComputerperipheralsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputerperipheralsComponent]
    });
    fixture = TestBed.createComponent(ComputerperipheralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
