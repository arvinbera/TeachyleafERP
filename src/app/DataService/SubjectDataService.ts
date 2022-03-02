import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class SubjectDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddSubject(model:any)
    {
        return this.ModelRequest(this.http,"addsubject",model);
    }
    SubjectList()
    {
        return this.GetRequest(this.http,"listsubject");
    }
    UpdateSubject(model:any)
    {
        return this.PutRequest(this.http,"updatesubject",model);
    }
    DeleteSubject(model:any)
    {
        return this.DeleteRequest(this.http,"deletesubject",model);
    }
}
