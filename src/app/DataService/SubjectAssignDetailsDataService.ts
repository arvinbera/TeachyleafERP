import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})

export default class SubjectAssignDetailsDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }

    SubjectAssignDetails(model:any)
    {
        return this.GetRequest(this.http,"subjectassign/"+model.class_id);
    }

    UpdateSubjectAssign(model:any)
    {
        return this.PutRequest(this.http,"subjectassign/"+model.id,model);
    }

    DeleteSubjectAssign(model:any)
    {
       return this.DeleteRequest(this.http,"subjectassign/"+model.id,model);
    }
}