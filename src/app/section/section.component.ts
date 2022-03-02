import { Component, OnInit } from '@angular/core';
import SectionDataService from '../DataService/SectionDataService';
import { SectionModel } from '../Models/SectionModel';
import { sectionviewmodel } from '../ViewModel/sectionviewmodel';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  Model:sectionviewmodel=new sectionviewmodel();
  constructor(private http:SectionDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddSection()
  {
   
    
    console.log(this.Model);
    this.http.AddSection(this.Model).subscribe(res=>{
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
  updateSection()
  {
    
    console.log("Hello");
    this.http.UpdateSection(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteSection()
  {
    
    
    this.http.DeleteSection(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:SectionModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:SectionModel)
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
    this.http.SectionList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.sections=res.Data as SectionModel[];
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }
  

}
