import { Component, OnInit } from '@angular/core';
import UserDataService from '../DataService/UserDataService';
import { userviewmodel } from '../ViewModel/userviewmodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Model:userviewmodel = new userviewmodel();
  constructor(private http:UserDataService) { }
  RegisterUser()
  {
    return this.http.RegisterUser(this.Model).subscribe(res=>{
      console.log(res.Errors);
    },error=>
    console.log(error)
    )
  }
  ngOnInit(): void {
  }

}
