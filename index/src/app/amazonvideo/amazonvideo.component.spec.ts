import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonvideoComponent } from './amazonvideo.component';

describe('AmazonvideoComponent', () => {
  let component: AmazonvideoComponent;
  let fixture: ComponentFixture<AmazonvideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmazonvideoComponent]
    });
    fixture = TestBed.createComponent(AmazonvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
