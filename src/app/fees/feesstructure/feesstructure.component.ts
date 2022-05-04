import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';
@Component({
  selector: 'app-feesstructure',
  templateUrl: './feesstructure.component.html',
  styleUrls: ['./feesstructure.component.css']
})
export class FeesstructureComponent implements OnInit {

  constructor(private paymodeservice:FeesStructureDataService,private router:ActivatedRoute) { }
  paymodes:any;
  class_id:any;
  session_id:any;
  fees_structure:any;
  component:number=0;
  admission:number=0;
  model={class_id:"",session_id:""};
  childData:any;
  FeesModeList()
  {
    this.model.class_id=this.class_id;
    this.model.session_id=this.session_id;
    this.paymodeservice.ShowFeesModes(this.model).subscribe(res=>{
      if(res.IsSuccess)
      {
     this.paymodes=res.Data;
     console.log(res.Data)
      }
    },error=>{console.log(error.message)})
  }
  ShowComponent()
  {
    this.component=1;
    this.admission=0;
  }
  ShowAdmission()
  {
    this.admission=1;
    this.component=0;
  }
  ngOnInit(): void {
    this.class_id=this.router.snapshot.paramMap.get('class_id');
    this.session_id=this.router.snapshot.paramMap.get('session_id');
    
    this.childData={
      class_id:this.class_id,
      session_id:this.session_id,
      fees_structure:this.router.snapshot.paramMap.get('structure_name'),
    }
    this.FeesModeList();
  }
  
}
