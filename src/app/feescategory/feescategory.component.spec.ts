import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeescategoryComponent } from './feescategory.component';

describe('FeescategoryComponent', () => {
  let component: FeescategoryComponent;
  let fixture: ComponentFixture<FeescategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeescategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeescategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
