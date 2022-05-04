import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesstructureComponent } from './feesstructure.component';

describe('FeesstructureComponent', () => {
  let component: FeesstructureComponent;
  let fixture: ComponentFixture<FeesstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesstructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
