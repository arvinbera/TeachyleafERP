import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class FeesCategoryDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddFeesCategory(model:any)
    {
        return this.ModelRequest(this.http,"feescategory",model);
    }
    FeescategoryList()
    {
        return this.GetRequest(this.http,"feescategory");
    }
    UpdateFeescategory(model:any)
    {
        console.log(model.id);
        return this.PutRequest(this.http,"feescategory/"+model.id,model);
    }
    DeleteFeescategory(model:any)
    {
        return this.DeleteRequest(this.http,"feescategory/"+model.id,model);
    }
}
