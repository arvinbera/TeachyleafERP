import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import BaseDataService from "./BaseDataService";
@Injectable({
    providedIn:'root'
})
export default class StudentDataService extends BaseDataService
{
   constructor(private http:HttpClient)
   {
       super();
   }
   AddStudent(model:any)
   { console.log(model);
     return this.ModelRequest(this.http,"students",model);
   }
   SearchStudent(model:any)
   {
     return this.ModelRequest(this.http,"searchstudent",model);
   }
   SaveRoll(model:any)
   {
     return this.ModelRequest(this.http,"saveroll",model);
   }
   SearchStudentDetail(model:any)
   {
     return this.ModelRequest(this.http,"allstudents",model);
   }
   DeleteStudent(model:any)
   {
     return this.DeleteRequest(this.http,"students/"+model.id,model);
   }
   PromoteClass(id:any)
   {
      return this.GetRequest(this.http,"promoteclass/"+id);
   }
   PromoteSession(id:any)
   {
      return this.GetRequest(this.http,"promotesession/"+id);
   }
   PromoteStudent(model:any)
   {
     return this.ModelRequest(this.http,"promotestudent/",model);
   }
   UploadBulkStudent(model:any)
   {
     return this.ModelRequest(this.http,"bulkupload/",model);
   }
}