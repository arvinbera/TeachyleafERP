import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';

@Component({
  selector: 'app-viewpaymentmode',
  templateUrl: './viewpaymentmode.component.html',
  styleUrls: ['./viewpaymentmode.component.css']
})
export class ViewpaymentmodeComponent implements OnInit {
  class_id:any;
  session_id:any;
  paymodes:any;
  model={class_id:"",session_id:""};
  installment={class_id:"",session_id:"",paymode:""};
  displayStyle = "none";
  paydates:any;
  moment:any=moment;
  constructor(private paymodeservice:FeesStructureDataService,private router:ActivatedRoute) { }
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
  ngOnInit(): void {
    this.class_id=this.router.snapshot.paramMap.get('class_id');
    this.session_id=this.router.snapshot.paramMap.get('session_id');
    this.FeesModeList();
  }
  ShowInstallments(x:any)
  {
    this.displayStyle="block";
    this.installment.class_id=this.class_id;
    this.installment.session_id=this.session_id;
    this.installment.paymode=x.paymode;
    console.log(this.installment)
    this.paymodeservice.ShowInstallments(this.installment).subscribe(res=>{
      if(res.IsSuccess)
      {
        this.paydates=res.Data;
        console.log(this.paydates)
      }
    },error=>{})
  }
  CloseStructureModal()
  {
    this.displayStyle="none";
  }
}
