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
import { AuthGuard as Guard} from './jwt/AuthGuard';
import { StudentRegistrationComponent } from './students/student-registration/student-registration.component';
const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'fees',
    loadChildren: () => import('./fees/fees.module').then(m=> m.FeesModule)
  },
  {
  path:"dashboard/register/login",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/sessions",component:SessionsComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/shift",component:ShiftComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/class",component:ClasssetupComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/section",component:SectionComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/subject",component:SubjectComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/examtype",component:ExamtypeComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/designation",component:DesignationComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/feescategory",component:FeescategoryComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/register",component:RegisterComponent
  },
  {
    path:"dashboard/subjectassign",component:SubjectassignComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/subjectassigncreate",component:SubjectassigningcreateComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/subjectassigncreate/dashboard/subjectassign",component:SubjectassignComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/subjectassigndetails/:id",component:SubjectassigndetailsComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/feesamount",component:FeesamountComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/feescreate",component:FeescreateComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/feesdetails/:id",component:FeesdetailsComponent,canActivate:[Guard]
  },
  {
    path:"dashboard/studentregistration",component:StudentRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
