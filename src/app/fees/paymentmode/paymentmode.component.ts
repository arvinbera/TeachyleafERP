import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-paymentmode',
  templateUrl: './paymentmode.component.html',
  styleUrls: ['./paymentmode.component.css']
})
export class PaymentmodeComponent implements OnInit {
  bsValue = new Date();
  InstallmentForm=new FormGroup({
    numberofinstallment:new FormControl()
  });
  datePickerConfig: Partial<BsDatepickerConfig>;
  installment:any=[];
  AddInstallments()
  {
    let count=this.InstallmentForm.value['numberofinstallment'];

    for(var i=1;i<=count;i++)
    {
      this.installment.push("");
    }
    
  }
  constructor() 
  { 
    this.datePickerConfig= Object.assign({},{containerClass:'theme-dark-blue'})
  }

  ngOnInit(): void {
  }

}
