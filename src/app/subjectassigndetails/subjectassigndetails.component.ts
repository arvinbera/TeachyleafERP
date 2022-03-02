import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SubjectAssignDetailsDataService from '../DataService/SubjectAssignDetailsDataService';
import { SubjectAssignModel } from '../Models/SubjectAssignModel';
import { classsetupviewmodel } from '../ViewModel/classsetupviewmodel';
import { subjectassignviewmodel } from '../ViewModel/subjectassignviewmodel';
import { subjectviewmodel } from '../ViewModel/subjectviewmodel';

@Component({
  selector: 'app-subjectassigndetails',
  templateUrl: './subjectassigndetails.component.html',
  styleUrls: ['./subjectassigndetails.component.css']
})
export class SubjectassigndetailsComponent implements OnInit {
  Model:subjectassignviewmodel = new subjectassignviewmodel();
  constructor(private http:SubjectAssignDetailsDataService,private router:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Model.class_id= this.router.snapshot.paramMap.get("id")??"";
    this.bind();
  }
  displayStyle = "none";
  displayDeleteStyle ="none";
  openEditPopup(x?:SubjectAssignModel)
  {
    
    console.log(x?.id);
    this.Model.subject_id=x?.subject_id;
    this.Model.full_marks=x?.full_marks;
    this.Model.pass_marks=x?.pass_marks;
    this.Model.subject_type=x?.subject_type;
    this.Model.id=x?.id;
     this.displayStyle = "block";
  }
 bind()
 {
   //console.log(this.Model.id);
   this.http.SubjectAssignDetails(this.Model).subscribe(res=>{
      this.Model.subjectassign=res.Data as SubjectAssignModel[];
      console.log(this.Model);
   });
 }
 updateSubject()
 {
   console.log(this.Model);
  
   this.http.UpdateSubjectAssign(this.Model).subscribe(res=>{
     console.log(res);
     if(res.IsSuccess)
     {
       this.bind();
     }
   },error=>alert(error.message));
 }
 deleteSubject()
 {
   this.http.DeleteSubjectAssign(this.Model).subscribe(res=>{
     if(res.IsSuccess)
     {
       this.bind();
     }
   },error=>alert(error.message))
 }
 closePopup()
 {
   this.displayStyle = "none";
 }
 closeDeletePopup()
 {
  this.displayDeleteStyle = "none";
 }
 openDeletePopup(x?:SubjectAssignModel)
 {
  //this.Model.subjectassign=x?.subject;
  this.Model.id=x?.id;
  this.displayDeleteStyle = "block";
 }
}
