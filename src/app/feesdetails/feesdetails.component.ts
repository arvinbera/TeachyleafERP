import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ClassDataService from '../DataService/ClassDataService';
import FeesAmountDataService from '../DataService/FeesAmountDataService';
import { ClassSetupModel } from '../Models/ClassSetupModel';
import { FeesAmountModel } from '../Models/FeesAmountModel';
import { feesdetailviewmodel } from '../ViewModel/feesdetailviewmodel';

@Component({
  selector: 'app-feesdetails',
  templateUrl: './feesdetails.component.html',
  styleUrls: ['./feesdetails.component.css']
})
export class FeesdetailsComponent implements OnInit {
  Model:feesdetailviewmodel=new feesdetailviewmodel();
  constructor(private http:FeesAmountDataService,private router:ActivatedRoute,private myservice:ClassDataService) { }
  
  ngOnInit(): void {
    this.Model.fees_category_id=this.router.snapshot.paramMap.get("id")??"";
    this.bind();
    this.bind2();
  }
  displayStyle = "none";
  displayDeleteStyle ="none";
  
  bind()
  {
    this.http.AllFeesAmounts(this.Model).subscribe(res=>{
      this.Model.fees_amounts =res.Data as FeesAmountModel[];
      console.log(this.Model);
    });
  }
  bind2()
  {
    this.myservice.ClassList().subscribe(res=>{
      this.Model.class_name=res.Data as ClassSetupModel[];
    });
  }
  closePopup()
  {
    this.displayStyle = "none";
  }
  openEditPopup(x?:FeesAmountModel)
  {
    this.Model.amount=x?.amount;
    this.Model.class_id=x?.class_id;
    this.displayStyle = "block";
  }
}
