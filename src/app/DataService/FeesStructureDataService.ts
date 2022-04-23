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
}