import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class SectionDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddSection(model:any)
    {
        return this.ModelRequest(this.http,"addsection",model);
    }
    SectionList()
    {
        return this.GetRequest(this.http,"listsection");
    }
    UpdateSection(model:any)
    {
        return this.PutRequest(this.http,"updatesection",model);
    }
    DeleteSection(model:any)
    {
        return this.DeleteRequest(this.http,"deletesection",model);
    }
}
