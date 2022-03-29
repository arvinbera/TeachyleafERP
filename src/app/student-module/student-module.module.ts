import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule
  ]
})
export class StudentModuleModule {
  constructor()
  {
    console.log("Student Module Loaded");
  }
 }
