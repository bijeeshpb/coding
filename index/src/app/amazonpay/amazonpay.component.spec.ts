import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonpayComponent } from './amazonpay.component';

describe('AmazonpayComponent', () => {
  let component: AmazonpayComponent;
  let fixture: ComponentFixture<AmazonpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonpayComponent]
    });
    fixture = TestBed.createComponent(AmazonpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
