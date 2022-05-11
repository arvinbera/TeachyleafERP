import { Component, Input, OnInit } from '@angular/core';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';

@Component({
  selector: 'app-admissionfee',
  templateUrl: './admissionfee.component.html',
  styleUrls: ['./admissionfee.component.css']
})
export class AdmissionfeeComponent implements OnInit {
  @Input() childData={} as any;
  constructor(private componentfeesservice:FeesStructureDataService) { }
  componentfees:any;
  totalfees:any;
  another:any;
  ngOnInit(): void {
    //this.ComponentFeesList();
    this.AdmissionFeesList();
  }
  // ComponentFeesList()
  // {
    
  //   console.log("chlid",this.childData);
  //   this.componentfeesservice.AdmissionFeesDetails(this.childData).subscribe(res=>{
      
  //     if(res.IsSuccess)
  //     {
  //       this.componentfees=res.Data;
  //       console.log(this.componentfees);
  //     }
  //   },error=>{})
  // }
  SaveAdmissionFees()
  {
    var model={
      class_id:this.childData.class_id,
      session_id:this.childData.session_id,
      fees_structure:this.childData.fees_structure,
      components:this.totalfees
    }
    this.componentfeesservice.AddAdmissionFees(model).subscribe(res=>{
      if(res.IsSuccess)
      {
        alert(res.Message)
      }
    },error=>{})
    console.log(model);
  }
  AdmissionFeesList()
  {
    
    console.log("chlid",this.childData);
    this.componentfeesservice.ComponentFeesDetails(this.childData).subscribe(res=>{
      
      if(res.IsSuccess)
      {
        var data=res.Data as any;
        this.totalfees=data.feesdetails;
        this.another=data.another;
        console.log(this.another);
      }
    },error=>{})
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  
}
