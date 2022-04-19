import { Component, OnInit } from '@angular/core';
import SetupDataService from 'src/app/DataService/SetupDataService';
import ClassDataService from 'src/app/DataService/ClassDataService';

@Component({
  selector: 'app-classpaymentstructure',
  templateUrl: './classpaymentstructure.component.html',
  styleUrls: ['./classpaymentstructure.component.css']
})
export class ClasspaymentstructureComponent implements OnInit {
  all_classes:any;
  all_sessions:any;
  constructor(private ClassService:ClassDataService,private SessionService:SetupDataService) { }

  ngOnInit(): void {
    this.bind();
    this.bind2();
  }
  bind()
  {
    this.ClassService.ClassList().subscribe(res=>{
      if(res.IsSuccess)
      {
        this.all_classes=res.Data;
      }
    },error=>{console.log(error.Message)})
  }
  bind2()
  {
    this.SessionService.SessionList().subscribe(res=>{
      if(res.IsSuccess)
      {
        this.all_sessions=res.Data;
      }
    },error=>{alert(error.message)})
  }
}
