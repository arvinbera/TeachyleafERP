import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class ExamTypeDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddExamType(model:any)
    {
        return this.ModelRequest(this.http,"examtype",model);
    }
    ExamTypeList()
    {
        return this.GetRequest(this.http,"examtype");
    }
    UpdateExamType(model:any)
    {
        console.log(model.id);
        return this.PutRequest(this.http,"examtype/"+model.id,model);
    }
    DeleteExamType(model:any)
    {
        return this.DeleteRequest(this.http,"examtype/"+model.id,model);
    }
}
