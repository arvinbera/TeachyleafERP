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
    AddSessionsetup(model:any)
    {
        return this.ModelRequest(this.http,"addsession",model);
    }
    SessionList()
    {
        return this.GetRequest(this.http,"listsession");
    }
    UpdateSession(model:any)
    {
        return this.PutRequest(this.http,"updatesession",model);
    }
    DeleteSession(model:any)
    {
        return this.DeleteRequest(this.http,"deletesession",model);
    }
}
