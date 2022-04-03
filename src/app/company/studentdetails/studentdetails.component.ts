import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ClassDataService from 'src/app/DataService/ClassDataService';
import SetupDataService from 'src/app/DataService/SetupDataService';
import StudentDataService from 'src/app/DataService/StudentDataService';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  all_sessions:any;
  all_classes:any;
  promote_classes:any;
  promote_sessions:any;
  SearchForm=new FormGroup({
    class_id:new FormControl(),
    session_id:new FormControl(),
  });
  PromoteForm=new FormGroup({
    session_id:new FormControl(),
    class_id:new FormControl(),
    id:new FormControl()
  });
 uploadForm=new FormGroup({
  file: new FormControl(),
  fileSource: new FormControl()
 });
  constructor(private sessionservice:SetupDataService,private classervice:ClassDataService,private http:StudentDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  id:any;
  student_id:any;
  isShown:any=false;
  allStudentList:any;
  ngOnInit(): void {
    this.getAllClasses();
    this.getAllSessions();
    this.StudentSearch();
  }
  SetFile(event:any)
  {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        fileSource: file
      });
    }

  }
  StudentSearch()
  {
    this.http.SearchStudentDetail(this.SearchForm.value).subscribe(res=>{
      
      if(res.IsSuccess)
      {
        this.isShown=true;
      this.allStudentList=res.Data;
      }
    },error=>{alert("Error")});
  }
  uploadBulk()
  {
    const formData = new FormData();
    formData.append('file',this.uploadForm.get('fileSource')?.value);
    console.log(formData);
    this.http.UploadBulkStudent(formData).subscribe(res=>{
      console.log(res);
      alert("Data Inserted Successfully");
    },error=>{
      alert("Error");
    })
  }
  getAllClasses()
  {
    this.classervice.ClassList().subscribe(res=>{
      this.all_classes=res.Data;
    },error=>{alert("Error")})
  }
  getAllSessions()
  {
    this.sessionservice.SessionList().subscribe(res=>{
      this.all_sessions=res.Data;
    },error=>{alert("Error")})
  };
  openPromotePopup(data:any)
  { this.id=data.class_id;
    this.student_id=data.id;
    this.displayStyle = "block";
    this.http.PromoteClass(this.id).subscribe(res=>{
      if(res.IsSuccess)
      {
      this.promote_classes=res.Data;
      }
    }
      ,error=>{alert("Error")});
    
    this.id=data.session_id;
    this.http.PromoteSession(this.id).subscribe(res=>{
      if(res.IsSuccess)
      {
      this.promote_sessions=res.Data;
      }
    },error=>{alert("Error")})
  }
  closePromotePopup()
  {
    this.displayStyle ="none";
  }
  openDeletePopup(id:any)
  {
    this.displayDeleteStyle = "block";
    this.id=id;
  }
  closeDeletePopup()
  {
    this.displayDeleteStyle = "none";
  }
  deleteStudent()
  {
    console.log(this.allStudentList);
    this.http.DeleteStudent({id:this.id}).subscribe(res=>{
      if(res.IsSuccess)
      {
        this.StudentSearch();
      }
    },error=>{alert("Error")});
  }
  PromoteStudent()
  {
    let model=this.PromoteForm.value;
    model.id=this.student_id;

    console.log(model);
    this.http.PromoteStudent(model).subscribe(res=>{
      alert("The Student has been promoted successfully")
    },error=>{console.log(error)});
  }
}
