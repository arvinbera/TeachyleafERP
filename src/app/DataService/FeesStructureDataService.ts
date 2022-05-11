import BaseDataService from "./BaseDataService"
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export default class FeesStructureDataService extends BaseDataService
{
  constructor(private http:HttpClient)
  {
      super();
  }
  AddStructure(model:any)
  {
    return this.ModelRequest(this.http,"classstructure",model);
  }
  StructureList(model:any)
  {
    return this.GetRequest(this.http,`classfeesstructure?session_id=${model.session_id}`);
  }
  AddFeesMode(model:any)
  {
    return this.ModelRequest(this.http,"addfeemode",model);
  }
  ShowFeesModes(model:any)
  {
    return this.GetRequest(this.http,"feesmodepaydate/"+model.class_id+"/"+model.session_id);
  }
  ShowInstallments(model:any)
  {
    return this.GetRequest(this.http,"installments/"+model.class_id+"/"+model.session_id+"/"+model.paymode);
  }
  AddComponentFees(model:any)
  {
    return this.ModelRequest(this.http,"addfeescomponent",model);
  }
  ComponentFeesDetails(model:any)
  {
    return this.GetRequest(this.http,"componentfeedetails/"+model.class_id+"/"+model.session_id+"/"+model.fees_structure);
  }
  AdmissionFeesDetails(model:any)
  {
    return this.GetRequest(this.http,"admissionfeesdetails/"+model.class_id+"/"+model.session_id+"/"+model.fees_structure)
  }
  AddAdmissionFees(model:any)
  {
    return this.ModelRequest(this.http,"addadmissionfees",model);
  }
}