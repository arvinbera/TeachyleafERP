import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentfeesmodeComponent } from './paymentfeesmode.component';

describe('PaymentfeesmodeComponent', () => {
  let component: PaymentfeesmodeComponent;
  let fixture: ComponentFixture<PaymentfeesmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentfeesmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentfeesmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
