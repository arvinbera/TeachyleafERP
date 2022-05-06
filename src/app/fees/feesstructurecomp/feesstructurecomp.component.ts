import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import ComponentDataService from 'src/app/DataService/ComponentDataService';
import FeesStructureDataService from 'src/app/DataService/FeesStructureDataService';

@Component({
  selector: 'app-feesstructurecomp',
  templateUrl: './feesstructurecomp.component.html',
  styleUrls: ['./feesstructurecomp.component.css']
})
export class FeesstructurecompComponent implements OnInit {
  @Input() childData={} as any;
  item = {} as any;
  constructor(private feescomponentservice: ComponentDataService, private fb: FormBuilder,
    private componentfeesservice:FeesStructureDataService) { }
  allcomponents: any;
  componentfees:any;
  //items: { comp: any }[] = [];
  public form?: FormGroup;
  ngOnInit(): void {
    this.ComponentFeesList();

  }

  //ComponentForm=new FormGroup({});
  // ComponentForm = this.fb.group({
  //   addDynamicElement: this.fb.array([]),
    
  // });
  // get addDynamicElement() {
  //   return this.ComponentForm.get('addDynamicElement') as FormArray;
  // }

   toString(s:any) {
    return JSON.stringify(s);
  }
  ComponentFeesList()
  {
    
    console.log("chlid",this.childData);
    this.componentfeesservice.ComponentFeesDetails(this.childData).subscribe(res=>{
      
      if(res.IsSuccess)
      {
        this.componentfees=res.Data;
        console.log(this.componentfees);
      }
    },error=>{})
  }
  // ComponentList() {
  //   this.feescomponentservice.ComponentList().subscribe(res => {
  //     if (res.IsSuccess) {
  //       this.allcomponents = res.Data;

  //       var list = res.Data as any[];


  //       // list.forEach(element => {
  //       //   this.addDynamicElement.push(element)
  //       // });

  //       //this.addDynamicElement.push(this.fb.control(''))

  //       console.log(this.allcomponents)
  //       this.allcomponents.forEach((v: any, i: any) => {
  //        // this.ComponentForm.addControl(i, new FormControl());

  //       })

  //      // console.log(this.items)
  //     }
  //   }, error => { })
  // }
  SaveComponent() {

    var model={
      class_id:this.childData.class_id,
      session_id:this.childData.session_id,
      fees_structure:this.childData.fees_structure,
      components:this.componentfees
    }
    this.componentfeesservice.AddComponentFees(model).subscribe(res=>{
      if(res.IsSuccess)
      {
        alert(res.Message)
      }
    },error=>{})
    console.log(model)
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
