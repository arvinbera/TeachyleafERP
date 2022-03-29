import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SessionsComponent } from './sessions/sessions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftComponent } from './shift/shift.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClasssetupComponent } from './classsetup/classsetup.component';
import { SectionComponent } from './section/section.component';
import { SubjectComponent } from './subject/subject.component';
import { ExamtypeComponent } from './examtype/examtype.component';
import { DesignationComponent } from './designation/designation.component';
import { FeescategoryComponent } from './feescategory/feescategory.component';
import { RegisterComponent } from './register/register.component';
import { SubjectassignComponent } from './subjectassign/subjectassign.component';
import { SubjectassigndetailsComponent } from './subjectassigndetails/subjectassigndetails.component';
import { SubjectassigningcreateComponent } from './subjectassigningcreate/subjectassigningcreate.component';
import { FeesamountComponent } from './feesamount/feesamount.component';
import { FeescreateComponent } from './feescreate/feescreate.component';
import { FeesdetailsComponent } from './feesdetails/feesdetails.component';
import { StudentsModule } from './students/students.module';
import { StudentModuleModule } from './student-module/student-module.module';








@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    SessionsComponent,
    DashboardComponent,
    ShiftComponent,
    ClasssetupComponent,
    SectionComponent,
    SubjectComponent,
    ExamtypeComponent,
    DesignationComponent,
    FeescategoryComponent,
    RegisterComponent,
    SubjectassignComponent,
    SubjectassigndetailsComponent,
    SubjectassigningcreateComponent,
    FeesamountComponent,
    FeescreateComponent,
    FeesdetailsComponent,

    
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StudentsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
    console.log("App Module Loaded");
  }
}
