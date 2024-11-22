import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryofficeComponent } from './stationaryoffice.component';

describe('StationaryofficeComponent', () => {
  let component: StationaryofficeComponent;
  let fixture: ComponentFixture<StationaryofficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StationaryofficeComponent]
    });
    fixture = TestBed.createComponent(StationaryofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
