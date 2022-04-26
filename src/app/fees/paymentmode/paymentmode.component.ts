import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent implements OnInit {
  
  
  constructor(public fb: FormBuilder,private router:ActivatedRoute,private InstallmentService:FeesStructureDataService) 
  { 
    this.datePickerConfig= Object.assign({},{containerClass:'theme-dark-blue'})
  }
  bsValue = new Date();
  savebutton:any=0;
  class_id:any;
  session_id:any;
  item ={ session_id:'',class_id:'',paydate:''};
  InstallmentForm=this.fb.group({
    addDynamicElement:this.fb.array([]),
    paymode:[''],
  });
  datePickerConfig: Partial<BsDatepickerConfig>;
  get addDynamicElement() {
    return this.InstallmentForm.get('addDynamicElement') as FormArray;
  }
  AddInstallments(): void
  {
    this.addDynamicElement.push(this.fb.control(''))
    this.savebutton=1;
  }
  
  SaveInstallment()
  {
    this.item.class_id=this.class_id;
    this.item.session_id=this.session_id;
    
    var items=[] as any[];

    this.InstallmentForm.value.addDynamicElement?.forEach((element:any) => {

      items.push({paydate:moment(element).format("Y-M-D")});
      
    });

    var model={class_id:this.class_id,session_id:this.session_id,items:items,paymode:this.InstallmentForm.value['paymode']}
    console.log(model)
    this.InstallmentService.AddFeesMode(model).subscribe(res=>{
      if(res.IsSuccess)
      {
        alert(res.Message)
      }
    },error=>{})
    
  }
  ngOnInit(): void {
    this.class_id=this.router.snapshot.paramMap.get('id');
    this.session_id=this.router.snapshot.paramMap.get('session_id');
    
  }

}
