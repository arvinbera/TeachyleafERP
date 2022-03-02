import { SubjectAssignModel } from "../Models/SubjectAssignModel";

export class subjectassignviewmodel
{
    subjectassign:SubjectAssignModel[]=[];
    class_id?:string;
    subject_id?:string;
    full_marks?:string;
    pass_marks?:string;
    subject_type?:string;
    id?:number;
}