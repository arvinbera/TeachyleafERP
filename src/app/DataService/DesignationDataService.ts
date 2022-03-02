import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class DesignationDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddDesignation(model:any)
    {
        return this.ModelRequest(this.http,"designation",model);
    }
    DesignationList()
    {
        return this.GetRequest(this.http,"designation");
    }
    UpdateDesignation(model:any)
    {
        console.log(model.id);
        return this.PutRequest(this.http,"designation/"+model.id,model);
    }
    DeleteDesignation(model:any)
    {
        return this.DeleteRequest(this.http,"designation/"+model.id,model);
    }
}
