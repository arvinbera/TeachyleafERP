import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasspaymentstructureComponent } from './classpaymentstructure.component';

describe('ClasspaymentstructureComponent', () => {
  let component: ClasspaymentstructureComponent;
  let fixture: ComponentFixture<ClasspaymentstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasspaymentstructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasspaymentstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
