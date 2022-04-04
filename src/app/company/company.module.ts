import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { StudentrollComponent } from './studentroll/studentroll.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StudentComponent,
    StudentrollComponent,
    StudentdetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
  ]
})
export class CompanyModule { 
  constructor()
  {
    console.log("Company Module Loaded");
  }
}
