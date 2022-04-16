import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})
export default class ComponentDataService extends BaseDataService
{
    constructor(private http:HttpClient)
    {
        super();
    }
    AddComponent(model:any)
    {
        return this.ModelRequest(this.http,"component",model);
    }
    ComponentList()
    {
        return this.GetRequest(this.http,"component");
    }
    UpdateComponent(model:any)
    {   
        return this.PutRequest(this.http,"component/"+model.id,model);
    }
    DeleteComponent(model:any)
    {
        return this.DeleteRequest(this.http,"component/"+model.id,model);
    }
}
