import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})

export default class UserDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }

    RegisterUser(model:any)
    {
      return this.ModelRequest(this.http,"register",model);
    }

    Login(model:any)
    {
      return this.ModelRequest(this.http,"login",model); 
    }
}