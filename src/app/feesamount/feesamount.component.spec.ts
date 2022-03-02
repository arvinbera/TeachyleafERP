import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesamountComponent } from './feesamount.component';

describe('FeesamountComponent', () => {
  let component: FeesamountComponent;
  let fixture: ComponentFixture<FeesamountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesamountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
