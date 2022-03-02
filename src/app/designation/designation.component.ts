import { Component, OnInit } from '@angular/core';
import DesignationDataService from '../DataService/DesignationDataService';
import { DesignationModel } from '../Models/DesignationModel';
import { designationviewmodel } from '../ViewModel/designationviewmodel';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  Model:designationviewmodel=new designationviewmodel();

  constructor(private http:DesignationDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddDesignation()
  {
        
    console.log(this.Model);
    this.http.AddDesignation(this.Model).subscribe(res=>{
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
  updateDesignation()
  {
        
    console.log("Hello");
    this.http.UpdateDesignation(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteDesignation()
  {
    
    this.http.DeleteDesignation(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:DesignationModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:DesignationModel)
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
    this.http.DesignationList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.designations=res.Data as DesignationModel[];
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }

}
