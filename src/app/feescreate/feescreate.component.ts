import { Component, OnInit } from '@angular/core';
import ClassDataService from '../DataService/ClassDataService';
import FeesAmountDataService from '../DataService/FeesAmountDataService';
import FeesCategoryDataService from '../DataService/FeesCategoryDataService';
import { ClassSetupModel } from '../Models/ClassSetupModel';
import { FeesAmountModel } from '../Models/FeesAmountModel';
import { FeesCategoryModel } from '../Models/FeesCategoryModel';
import { feesamountviewmodel } from '../ViewModel/feesamountviewmodel';

@Component({
  selector: 'app-feescreate',
  templateUrl: './feescreate.component.html',
  styleUrls: ['./feescreate.component.css']
})
export class FeescreateComponent implements OnInit {
  model:feesamountviewmodel=new feesamountviewmodel();
  constructor(private http:FeesAmountDataService,private feesservice:FeesCategoryDataService,private classservice:ClassDataService) { }
  FeesAmount()
  {
    let request={} as any;
    request.fees_category_id=this.model.fees_category_id;
    request.fees=this.model.fees;
    console.log(request);
    this.http.AddFeesAmount(request).subscribe(res=>{
      console.log(request);
    },
      error=>alert(error.message));
  }
  addQuantity()
  {
     let money=new FeesAmountModel();
     this.model.fees.push(money);
  }
  removeQuantity(i:number)
  {
    this.model.fees.splice(i,1);
  }
  BindFeesCategory()
  {
    this.feesservice.FeescategoryList().subscribe(res=>{
      this.model.bind_fees_category=res.Data as FeesCategoryModel[];
    });
  }
  BindAllClasses()
  {
    this.classservice.ClassList().subscribe(res=>{
      this.model.bind_all_classes=res.Data as ClassSetupModel[];
    });
  }
  ngOnInit(): void {
    this.BindFeesCategory();
    this.BindAllClasses();
  }

}
