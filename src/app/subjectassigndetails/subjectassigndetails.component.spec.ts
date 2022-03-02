import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectassigndetailsComponent } from './subjectassigndetails.component';

describe('SubjectassigndetailsComponent', () => {
  let component: SubjectassigndetailsComponent;
  let fixture: ComponentFixture<SubjectassigndetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectassigndetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectassigndetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
