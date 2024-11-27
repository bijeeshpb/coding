import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonmusicComponent } from './amazonmusic.component';

describe('AmazonmusicComponent', () => {
  let component: AmazonmusicComponent;
  let fixture: ComponentFixture<AmazonmusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonmusicComponent]
    });
    fixture = TestBed.createComponent(AmazonmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
