import { Component, OnInit } from '@angular/core';
import SubjectDataService from '../DataService/SubjectDataService';
import { SubjectModel } from '../Models/SubjectModel';
import { subjectviewmodel } from '../ViewModel/subjectviewmodel';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  Model:subjectviewmodel=new subjectviewmodel();
  constructor(private http:SubjectDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddSubject()
  {
        
    console.log(this.Model);
    this.http.AddSubject(this.Model).subscribe(res=>{
      alert(res.Message);
      if(res.IsSuccess){
        this.bind();
      }
    }
      //alert("hello");

    ,error=>
       alert(error.message)
    )
  }
  closePopup()
  {
    this.displayStyle = "none";
  }
  updateSubject()
  {
    
    console.log("Hello");
    this.http.UpdateSubject(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteSubject()
  {
    
    
    this.http.DeleteSubject(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:SubjectModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:SubjectModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayDeleteStyle = "block";
  }
  closeDeletePopup()
  {
    this.displayDeleteStyle = "none"; 
  }
  
  bind()
  {
    this.http.SubjectList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.subjects=res.Data as SubjectModel[];;
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }

}
