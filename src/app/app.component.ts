import { Component } from '@angular/core';
import SessionHelper from './core/SessionHelper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  public IsLogin:boolean=SessionHelper.GetSession()!=null?true:false;
  data=10;
}
