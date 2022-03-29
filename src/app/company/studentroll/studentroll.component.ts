import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import ClassDataService from 'src/app/DataService/ClassDataService';
import SetupDataService from 'src/app/DataService/SetupDataService';
import StudentDataService from 'src/app/DataService/StudentDataService';

@Component({
  selector: 'app-studentroll',
  templateUrl: './studentroll.component.html',
  styleUrls: ['./studentroll.component.css']
})
export class StudentrollComponent implements OnInit {
  isShown:boolean=false;
  all_sessions:any;
  all_classes:any;
  all_students:any;
  SearchForm=new FormGroup({
    class_id:new FormControl(),
    session_id:new FormControl()
  });
  constructor(private formBuilder: FormBuilder, private router: Router,private sessionservice:SetupDataService,private classervice:ClassDataService,
    private http:StudentDataService) { }
  
  ngOnInit(): void {
    this.getAllSessions();
    this.getAllClasses();
  }
  getAllSessions()
  {
    this.sessionservice.SessionList().subscribe(res=>{
      this.all_sessions=res.Data;
    },error=>{alert("Error")})
  }
  StudentSearch()
  {
    this.isShown=true;
    this.http.SearchStudent(this.SearchForm.value).subscribe(res=>{
      if(res.IsSuccess)
      {
      this.all_students=res.Data;
      }
    },error=>{alert("Error Occured")})
  }
  SaveRoll()
  {
    let model={students:this.all_students};

    console.log(model);
    this.http.SaveRoll(model).subscribe(res=>{
      if(res.IsSuccess)
      {
        alert(res.Message);
      }
    })
  }
  getAllClasses()
  {
    this.classervice.ClassList().subscribe(res=>{
      this.all_classes=res.Data;
    },error=>{alert("Error")})
  }
}
