import { Component, OnInit } from '@angular/core';
import SetupDataService from 'src/app/DataService/SetupDataService';
import { sessionlistviewmodel } from 'src/app/ViewModel/sessionlistviewmodel';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  Model:sessionlistviewmodel=new sessionlistviewmodel();
  constructor(private http:SetupDataService) { }

  ngOnInit(): void {
  }
  AddSession()
  {
     this.http.AddSessionsetup(this.Model).subscribe(res=>{
       if(res.IsSuccess)
       {
         alert("Success");
       }
     },error=>
     alert(error.message));
  }
}
