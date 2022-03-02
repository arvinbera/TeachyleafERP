import { Component, OnInit } from '@angular/core';
import ExamTypeDataService from '../DataService/ExamTypeDataService';
import { ExamTypeModel } from '../Models/ExamTypeModel';
import { examtypeviewmodel } from '../ViewModel/examtypeviewmodel';
@Component({
  selector: 'app-examtype',
  templateUrl: './examtype.component.html',
  styleUrls: ['./examtype.component.css']
})
export class ExamtypeComponent implements OnInit {
  Model:examtypeviewmodel = new examtypeviewmodel();
  constructor(private http:ExamTypeDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddExamType()
  {
        
    console.log(this.Model);
    this.http.AddExamType(this.Model).subscribe(res=>{
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
  updateExamType()
  {
        
    console.log("Hello");
    this.http.UpdateExamType(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteExamType()
  {
    
    this.http.DeleteExamType(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:ExamTypeModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:ExamTypeModel)
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
    this.http.ExamTypeList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.exam_types=res.Data as ExamTypeModel[];
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }

}
