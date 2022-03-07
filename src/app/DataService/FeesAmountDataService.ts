import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";
@Injectable({
    providedIn:'root'
})
export default class FeesAmountDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }

    AddFeesAmount(model:any)
    {
        return this.ModelRequest(this.http,"feesamount",model);
    }
    AllFeesAmounts(model:any)
    {
        return this.GetRequest(this.http,"feesamount/"+model.fees_category_id);
    }
    UpdateFeesAmount(model:any)
    {
        return this.PutRequest(this.http,"feesamount/"+model.id,model);
    }
    DeleteFeesAmount(model:any)
    {
        return this.DeleteRequest(this.http,"feesamount/"+model.id,model);
    }
}