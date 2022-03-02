import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import SetupDataService from '../DataService/SetupDataService';
import { SetupsModel } from '../Models/SetupsModel';
import { sessionlistviewmodel } from '../ViewModel/sessionlistviewmodel';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

export class SessionsComponent implements OnInit {
  
  
  Model:sessionlistviewmodel=new sessionlistviewmodel();

  
  constructor(private http:SetupDataService) { }

  ngOnInit(): void {
    
    this.bind();
    console.log(this.Model);
  }
  
  displayStyle = "none";
  displayDeleteStyle ="none";
  
  openEditPopup(x?:SetupsModel) {
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayStyle = "block";
  }
  openDeletePopup(x?:SetupsModel) {
    console.log(x);
    this.Model.name=x?.name;
    this.Model.id=x?.id;
    this.displayDeleteStyle = "block";
  }
  closeDeletePopup()
  {
    this.displayDeleteStyle = "none"; 
  }
  closePopup() {
    this.displayStyle = "none";
  }
  updateSession()
  {
    this.http.UpdateSession(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
        console.log("Hello");
      }
    }
    ,error=>
    alert(error.message))
  }
  deleteSession()
  {
    
    this.http.DeleteSession(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        this.bind();
      }
    }
    ,error=>
    alert(error.message))
  }
  AddSession()
  {


    console.log(this.Model);
    this.http.AddSessionsetup(this.Model).subscribe(res=>{
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
  bind()
  {
    this.http.SessionList().subscribe(res=>{

     // console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.sessions=res.Data as SetupsModel[];;
    
    }

    )
  }

}
