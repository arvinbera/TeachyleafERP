import { Component, OnInit } from '@angular/core';
import ClassDataService from '../DataService/ClassDataService';
import { ClassSetupModel } from '../Models/ClassSetupModel';
import { classsetupviewmodel } from '../ViewModel/classsetupviewmodel';
@Component({
  selector: 'app-subjectassign',
  templateUrl: './subjectassign.component.html',
  styleUrls: ['./subjectassign.component.css']
})
export class SubjectassignComponent implements OnInit {
  Model:classsetupviewmodel=new classsetupviewmodel();
  constructor(private http:ClassDataService) { }
  bind()
  {
    this.http.ClassList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.classes=res.Data as ClassSetupModel[];;
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
  }

}
