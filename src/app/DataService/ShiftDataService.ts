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
    AddShift(model:any)
    {
        return this.ModelRequest(this.http,"addshift",model);
    }
    ShiftList()
    {
        return this.GetRequest(this.http,"listshift");
    }
    UpdateShift(model:any)
    {
        return this.PutRequest(this.http,"updateshift",model);
    }
    DeleteShift(model:any)
    {
        return this.DeleteRequest(this.http,"deleteshift",model);
    }
}
