import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignpopupComponent } from './signpopup.component';

describe('SignpopupComponent', () => {
  let component: SignpopupComponent;
  let fixture: ComponentFixture<SignpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignpopupComponent]
    });
    fixture = TestBed.createComponent(SignpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
