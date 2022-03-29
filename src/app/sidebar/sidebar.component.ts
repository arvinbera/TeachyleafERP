import { Component, OnInit } from '@angular/core';
import SessionHelper from '../core/SessionHelper';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public IsLogin:boolean=SessionHelper.GetSession()!=null?true:false;
}
