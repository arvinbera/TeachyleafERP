import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class SubjectAssignDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddSubjectAssign(model:any)
    {
        return this.ModelRequest(this.http,"subjectassign",model);
    }
}