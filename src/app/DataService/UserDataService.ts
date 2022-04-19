import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import BaseDataService, { BaseResponse } from "./BaseDataService";

@Injectable({
    providedIn:'root'
})

export default class UserDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }

    RegisterUser(model:any):Observable<BaseResponse>
    {
      return this.ModelRequest(this.http,"register",model);
    }

    Login(model:any)
    {
      return this.ModelRequest(this.http,"login",model); 
    }

    GetToken() :string
    {
      var stringData= localStorage.getItem('session');

      if(!stringData || stringData==null){
        return (null as unknown) as string;
      }

      console.log(JSON.parse(stringData).token);

      return JSON.parse(stringData).token;
    }
}