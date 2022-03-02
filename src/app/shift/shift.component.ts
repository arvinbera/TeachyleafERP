import { Component, OnInit } from '@angular/core';
import ShiftDataService from '../DataService/ShiftDataService';
import { ShiftModel } from '../Models/ShiftModel';
import { shiftlistviewmodel } from '../ViewModel/shiftlistviewmodel';
@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {

  Model:shiftlistviewmodel=new shiftlistviewmodel();

  constructor(private http:ShiftDataService) { }
  displayStyle = "none";
  displayDeleteStyle ="none";
  AddShift()
  {
    
    console.log(this.Model);
    this.http.AddShift(this.Model).subscribe(res=>{
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
  updateShift()
  {
    console.log("Hello");
    this.http.UpdateShift(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteShift()
  {
    
    this.http.DeleteShift(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
      }
    }
    ,error=>
    alert(error.message))
  }
  openEditPopup(x?:ShiftModel)
  {
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:ShiftModel)
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
    this.http.ShiftList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.shifts=res.Data as ShiftModel[];;
    
    }

    )
  }
  ngOnInit(): void {
    
    this.bind();
    console.log(this.Model);
  }
  
}
