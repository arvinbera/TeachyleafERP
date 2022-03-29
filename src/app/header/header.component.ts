import { Component, OnInit } from '@angular/core';
import SessionHelper from '../core/SessionHelper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  Logout()
  {
    localStorage.removeItem("session");
    window.location.href="dashboard/register/login";
  }
  ngOnInit(): void {
  }
  public IsLogin:boolean=SessionHelper.GetSession()!=null?true:false;
}
