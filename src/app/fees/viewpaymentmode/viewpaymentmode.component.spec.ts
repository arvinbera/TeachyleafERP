import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentmodeComponent } from './viewpaymentmode.component';

describe('ViewpaymentmodeComponent', () => {
  let component: ViewpaymentmodeComponent;
  let fixture: ComponentFixture<ViewpaymentmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpaymentmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
