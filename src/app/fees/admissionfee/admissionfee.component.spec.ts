import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionfeeComponent } from './admissionfee.component';

describe('AdmissionfeeComponent', () => {
  let component: AdmissionfeeComponent;
  let fixture: ComponentFixture<AdmissionfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionfeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
