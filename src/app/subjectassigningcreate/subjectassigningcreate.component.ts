import { Component, OnInit } from '@angular/core';
import ClassDataService from '../DataService/ClassDataService';
import SubjectDataService from '../DataService/SubjectDataService';
import SubjectAssignDataService from '../DataService/SubjectAssignDataService';
import { ClassSetupModel } from '../Models/ClassSetupModel';
import { SubjectModel } from '../Models/SubjectModel';
import { classsetupviewmodel } from '../ViewModel/classsetupviewmodel';
import { subjectassigncreateviewmodel } from '../ViewModel/subjectassigncreateviewmodel';
import { subjectviewmodel } from '../ViewModel/subjectviewmodel';
import { SubjectAssignModel } from '../Models/SubjectAssignModel';

@Component({
  selector: 'app-subjectassigningcreate',
  templateUrl: './subjectassigningcreate.component.html',
  styleUrls: ['./subjectassigningcreate.component.css']
})
export class SubjectassigningcreateComponent implements OnInit {
  Model:subjectassigncreateviewmodel= new subjectassigncreateviewmodel();
  
  constructor(private myservice1:ClassDataService,private myservice2:SubjectDataService,private http:SubjectAssignDataService) { }

  SubjectAssign()
  {
    let request={} as any;
    request.class_id=this.Model.class_id;
    request.subjects=this.Model.subjects;


    this.http.AddSubjectAssign(request).subscribe(res=>{
      console.log(request);
    },
     error=>alert(error.message));
  }

   updateListItem(event:any,i:number)
  {
    const { target: { id, name, value } } = event;
    console.log(fetch);

  }
  addQuantity()
  {

    let subject=new SubjectAssignModel();
    this.Model.subjects.push(subject);
    console.log(this.Model)

  }
  removeQuantity(i:number)
  {
    this.Model.subjects.splice(i,1);
  }
  bind()
  {
    this.myservice1.ClassList().subscribe(res=>{

      console.log(res);
    //let model=res.Data as CustomerListViewModel;
    this.Model.bind_classes=res.Data as ClassSetupModel[];
    
    }

    )
  }
  bind2()
  {
    this.myservice2.SubjectList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.bind_subjects=res.Data as SubjectModel[];;
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
    this.bind2();
  }

}
