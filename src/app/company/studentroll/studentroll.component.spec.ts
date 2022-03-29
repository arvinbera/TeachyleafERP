import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrollComponent } from './studentroll.component';

describe('StudentrollComponent', () => {
  let component: StudentrollComponent;
  let fixture: ComponentFixture<StudentrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
