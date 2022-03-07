import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasssetupComponent } from './classsetup/classsetup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignationComponent } from './designation/designation.component';
import { ExamtypeComponent } from './examtype/examtype.component';
import { FeesamountComponent } from './feesamount/feesamount.component';
import { FeescategoryComponent } from './feescategory/feescategory.component';
import { FeescreateComponent } from './feescreate/feescreate.component';
import { FeesdetailsComponent } from './feesdetails/feesdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SectionComponent } from './section/section.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ShiftComponent } from './shift/shift.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectassignComponent } from './subjectassign/subjectassign.component';
import { SubjectassigndetailsComponent } from './subjectassigndetails/subjectassigndetails.component';
import { SubjectassigningcreateComponent } from './subjectassigningcreate/subjectassigningcreate.component';

const routes: Routes = [
  {
  path:"dashboard/register/login",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"dashboard/sessions",component:SessionsComponent
  },
  {
    path:"dashboard/shift",component:ShiftComponent
  },
  {
    path:"dashboard/class",component:ClasssetupComponent
  },
  {
    path:"dashboard/section",component:SectionComponent
  },
  {
    path:"dashboard/subject",component:SubjectComponent
  },
  {
    path:"dashboard/examtype",component:ExamtypeComponent
  },
  {
    path:"dashboard/designation",component:DesignationComponent
  },
  {
    path:"dashboard/feescategory",component:FeescategoryComponent
  },
  {
    path:"dashboard/register",component:RegisterComponent
  },
  {
    path:"dashboard/subjectassign",component:SubjectassignComponent
  },
  {
    path:"dashboard/subjectassigncreate",component:SubjectassigningcreateComponent
  },
  {
    path:"dashboard/subjectassigncreate/dashboard/subjectassign",component:SubjectassignComponent
  },
  {
    path:"dashboard/subjectassigndetails/:id",component:SubjectassigndetailsComponent
  },
  {
    path:"dashboard/feesamount",component:FeesamountComponent
  },
  {
    path:"dashboard/feescreate",component:FeescreateComponent
  },
  {
    path:"dashboard/feesdetails/:id",component:FeesdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
