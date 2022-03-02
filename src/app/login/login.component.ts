import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SessionHelper from '../core/SessionHelper';
import UserDataService from '../DataService/UserDataService';
import { userviewmodel } from '../ViewModel/userviewmodel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Model:userviewmodel = new userviewmodel();
  constructor(private http:UserDataService,private router:Router) { }
  LoginUser()
  { 
     this.http.Login(this.Model).subscribe(res=>{
      if(res.IsSuccess){
        SessionHelper.SetSession(res.Data);
        //this.router.navigate(["dashboard"]);

        window.location.href="/dashboard"

      }
    },error=>
      console.log(error))
  }
  ngOnInit(): void {
  }

}
