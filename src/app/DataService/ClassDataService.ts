import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class SetupDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddClass(model:any)
    {
        return this.ModelRequest(this.http,"addclass",model);
    }
    ClassList()
    {
        return this.GetRequest(this.http,"listclass");
    }
    SubjectList()
    {
        return this.GetRequest(this.http,"listsubject");
    }
    UpdateClass(model:any)
    {
        return this.PutRequest(this.http,"updateclass",model);
    }
    DeleteClass(model:any)
    {
        return this.DeleteRequest(this.http,"deleteclass",model);
    }
}
