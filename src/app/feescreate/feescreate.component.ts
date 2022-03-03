import { Component, OnInit } from '@angular/core';
import { FeesAmountModel } from '../Models/FeesAmountModel';
import { feesamountviewmodel } from '../ViewModel/feesamountviewmodel';

@Component({
  selector: 'app-feescreate',
  templateUrl: './feescreate.component.html',
  styleUrls: ['./feescreate.component.css']
})
export class FeescreateComponent implements OnInit {
  model:feesamountviewmodel=new feesamountviewmodel();
  constructor() { }
  addQuantity()
  {
     let money=new FeesAmountModel();
     this.model.fees.push(money);
  }
  removeQuantity(i:number)
  {
    this.model.fees.splice(i,1);
  }
  ngOnInit(): void {
  }

}
