import { Component, OnInit } from '@angular/core';
import { feescategoryviewmodel } from '../ViewModel/feescategoryviewmodel';
import { FeesCategoryModel } from '../Models/FeesCategoryModel';
import FeesCategoryDataService from '../DataService/FeesCategoryDataService';
@Component({
  selector: 'app-feesamount',
  templateUrl: './feesamount.component.html',
  styleUrls: ['./feesamount.component.css']
})
export class FeesamountComponent implements OnInit {
  Model:feescategoryviewmodel=new feescategoryviewmodel();
  constructor(private http:FeesCategoryDataService) { }
  bind()
  {
    this.http.FeescategoryList().subscribe(res=>{

      console.log(res)
    //let model=res.Data as CustomerListViewModel;
    this.Model.feescategories=res.Data as FeesCategoryModel[];
    
    }

    )
  }
  ngOnInit(): void {
    this.bind();
  }

}
