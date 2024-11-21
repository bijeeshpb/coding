import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileaccessoriesComponent } from './mobileaccessories.component';

describe('MobileaccessoriesComponent', () => {
  let component: MobileaccessoriesComponent;
  let fixture: ComponentFixture<MobileaccessoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileaccessoriesComponent]
    });
    fixture = TestBed.createComponent(MobileaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
