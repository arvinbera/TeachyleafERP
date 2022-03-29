import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentrollComponent } from './studentroll/studentroll.component';

const routes: Routes = [
  {
    path:"",
    component:StudentComponent
  },
  {
    path:"rolls",
    component:StudentrollComponent
  },
  {
    path:"details",
    component:StudentdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
