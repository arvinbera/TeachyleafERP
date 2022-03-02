import { SubjectModel } from "./SubjectModel";

export class SubjectAssignModel{
    id?:number;
    class_id?:number;
    subject_id?:string;
    full_marks?:string;
    pass_marks?:string;
    subject_type?:string;

    subject?:SubjectModel;
}