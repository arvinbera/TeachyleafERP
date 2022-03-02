import { HttpClient, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { Observable,throwError as obserableThrowError } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import SessionHelper from "../core/SessionHelper";


export default class BaseDataService{
    private ApiUrl:string="http://127.0.0.1:8000/api/";

    private session:any=SessionHelper.GetApiToken();
    private header:HttpHeaders;

    constructor(){
      this.header = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.session.token}`
     });
    }
    
    protected ModelRequest(http:HttpClient,url:string,model:any)
    {
     let data=Object.assign(model??{});
     
     return http.post<BaseResponse>(this.ApiUrl+url,data);
    }
    protected GetRequest(http:HttpClient,url:string)
    {

      return http.get<BaseResponse>(this.ApiUrl+url,{
        headers:this.header
      });
    }
    protected PutRequest(http:HttpClient,url:string,model:any)
    {
      let data=Object.assign(model??{})
      return http.put<BaseResponse>(this.ApiUrl+url,data);
    }
    protected DeleteRequest(http:HttpClient,url:string,model:any) 
    {
      let data=Object.assign(model??{})
      return http.delete<BaseResponse>(this.ApiUrl+url,{body:data});
    }

    HandleError(error: HttpErrorResponse) {
      return obserableThrowError(error.message || "Server error");
  }


}

interface BaseResponse{
    IsSuccess:boolean;
    Data:Object;
    Message:string;
    Errors:Object;
}