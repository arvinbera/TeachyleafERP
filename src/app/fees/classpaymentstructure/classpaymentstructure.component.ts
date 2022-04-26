import { Component, OnInit } from '@angular/core';
import SetupDataService from 'src/app/DataService/SetupDataService';
import ClassDataService from 'src/app/DataService/ClassDataService';
import { FormControl, FormGroup } from '@angular/forms';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';

@Component({
  selector: 'app-classpaymentstructure',
  templateUrl: './classpaymentstructure.component.html',
  styleUrls: ['./classpaymentstructure.component.css']
})
export class ClasspaymentstructureComponent implements OnInit {
  all_classes:any;
  all_sessions:any;
  current_session:any;
  elligible:any=0;
  model:any;
  session_id:any;
  structure_list:any;
  displayStyle = "none";
  items ={ session_id:'',class_id:'',name:''};
  isAdded:boolean=false;
  
  constructor(private ClassService:ClassDataService,private SessionService:SetupDataService,private StructureService:FeesStructureDataService) { }

  ngOnInit(): void {
  
    this.bind2();
  }
  FeesStructureForm = new FormGroup({
    structure:new FormControl()
  });
  Elligible(x:any)
  {
    let {target:{value}}=x;
    if(!value)
    {
      this.elligible=0
      this.structure_list=[];
    }
    else
    {
    this.elligible=1;
    this.current_session=value;
    this.StructureList();
    this.session_id=value;
    }
  }
  AddStructure()
  {
   this.items.class_id=this.model.id;
   this.items.session_id=this.current_session;
   this.items.name=this.FeesStructureForm.value['structure'];
   console.log(this.items);
   this.StructureService.AddStructure(this.items).subscribe(res=>{
    if(res.IsSuccess)
    { 
    alert("Fees Structure Added")
    this.displayStyle="none";
    this.StructureList();
    }
   },error=>{
     alert("Something is Wrong")
   })
  }
  StructureList()
  {
    this.items.session_id=this.current_session;
    this.StructureService.StructureList(this.items).subscribe(res=>{
      if(res.IsSuccess)
      {
        this.structure_list=res.Data;
      }
    },error=>{})
  }
 
  OpenStructureAddModal(x:any)
  {
   this.displayStyle="block";
   this.model=x;
   if(x.structures?.length==3){
    this.isAdded=true;
   }else {
     this.isAdded=false;
   }
  }
  CloseStructureModal()
  {
    this.displayStyle="none";
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
