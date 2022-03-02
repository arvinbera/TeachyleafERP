import { ClassSetupModel } from "../Models/ClassSetupModel";
import { SubjectAssignModel } from "../Models/SubjectAssignModel";
import { SubjectModel } from "../Models/SubjectModel";

export class subjectassigncreateviewmodel{
    bind_classes:ClassSetupModel[]=[];
    bind_subjects:SubjectModel[]=[];
    subjects:SubjectAssignModel[]=[];;
    class_id?:number;


}
