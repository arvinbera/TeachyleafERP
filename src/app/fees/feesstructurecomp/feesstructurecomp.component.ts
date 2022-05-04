import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import ComponentDataService from 'src/app/DataService/ComponentDataService';

@Component({
  selector: 'app-feesstructurecomp',
  templateUrl: './feesstructurecomp.component.html',
  styleUrls: ['./feesstructurecomp.component.css']
})
export class FeesstructurecompComponent implements OnInit {
  @Input() childData={} as any;
  constructor(private feescomponentservice: ComponentDataService, private fb: FormBuilder) { }
  allcomponents: any;
  //items: { comp: any }[] = [];
  public form?: FormGroup;
  ngOnInit(): void {
    this.ComponentList();
    console.log(this.childData)
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
  ComponentList() {
    this.feescomponentservice.ComponentList().subscribe(res => {
      if (res.IsSuccess) {
        this.allcomponents = res.Data;

        var list = res.Data as any[];


        // list.forEach(element => {
        //   this.addDynamicElement.push(element)
        // });

        //this.addDynamicElement.push(this.fb.control(''))

        console.log(this.allcomponents)
        this.allcomponents.forEach((v: any, i: any) => {
         // this.ComponentForm.addControl(i, new FormControl());

        })

       // console.log(this.items)
      }
    }, error => { })
  }
  SaveComponent() {

    var model={
      class_id:this.childData.class_id,
      session_id:this.childData.session_id,
      fees_structure:this.childData.fees_structure,
      components:this.allcomponents
    }
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
