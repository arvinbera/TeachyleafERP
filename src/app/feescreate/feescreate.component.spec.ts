import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeescreateComponent } from './feescreate.component';

describe('FeescreateComponent', () => {
  let component: FeescreateComponent;
  let fixture: ComponentFixture<FeescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeescreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
