import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectassignComponent } from './subjectassign.component';

describe('SubjectassignComponent', () => {
  let component: SubjectassignComponent;
  let fixture: ComponentFixture<SubjectassignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectassignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
