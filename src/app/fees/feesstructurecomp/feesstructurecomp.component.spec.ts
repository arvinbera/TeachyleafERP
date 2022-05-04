import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesstructurecompComponent } from './feesstructurecomp.component';

describe('FeesstructurecompComponent', () => {
  let component: FeesstructurecompComponent;
  let fixture: ComponentFixture<FeesstructurecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesstructurecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesstructurecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
