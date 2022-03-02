import { Component, OnInit } from '@angular/core';
import ClassDataService from '../DataService/ClassDataService';
import { ClassSetupModel } from '../Models/ClassSetupModel';
import { classsetupviewmodel } from '../ViewModel/classsetupviewmodel';

@Component({
  selector: 'app-classsetup',
  templateUrl: './classsetup.component.html',
  styleUrls: ['./classsetup.component.css']
})
export class ClasssetupComponent implements OnInit {

  Model:classsetupviewmodel=new classsetupviewmodel();

  constructor(private http:ClassDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddClass()
  {
    
    console.log(this.Model);
    this.http.AddClass(this.Model).subscribe(res=>{
      alert(res.Message);
      if(res.IsSuccess){
       // this.bind();
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
  updateClass()
  {
    console.log("Hello");
    this.http.UpdateClass(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteClass()
  {
    
    this.http.DeleteClass(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:ClassSetupModel)
  {
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:ClassSetupModel)
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
    this.http.ClassList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.classes=res.Data as ClassSetupModel[];;
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }

}
