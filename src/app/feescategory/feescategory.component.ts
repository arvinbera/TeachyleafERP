import { Component, OnInit } from '@angular/core';
import FeesCategoryDataService from '../DataService/FeesCategoryDataService';
import { FeesCategoryModel } from '../Models/FeesCategoryModel';
import { feescategoryviewmodel } from '../ViewModel/feescategoryviewmodel';

@Component({
  selector: 'app-feescategory',
  templateUrl: './feescategory.component.html',
  styleUrls: ['./feescategory.component.css']
})
export class FeescategoryComponent implements OnInit {
  Model:feescategoryviewmodel = new feescategoryviewmodel();
  constructor(private http:FeesCategoryDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddFeesCategory()
  {
        
    console.log(this.Model);
    this.http.AddFeesCategory(this.Model).subscribe(res=>{
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
  updateFeesCategory()
  {
        
    console.log("Hello");
    this.http.UpdateFeescategory(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteFeesCategory()
  {
    
    this.http.DeleteFeescategory(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:FeesCategoryModel)
  {
    
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:FeesCategoryModel)
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
    this.http.FeescategoryList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.feescategories=res.Data as FeesCategoryModel[];
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    console.log(this.Model);
  }

}
