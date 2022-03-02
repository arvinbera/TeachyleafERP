import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectassigningcreateComponent } from './subjectassigningcreate.component';

describe('SubjectassigningcreateComponent', () => {
  let component: SubjectassigningcreateComponent;
  let fixture: ComponentFixture<SubjectassigningcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectassigningcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectassigningcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
