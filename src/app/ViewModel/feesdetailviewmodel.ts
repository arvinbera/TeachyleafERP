import { ClassSetupModel } from "../Models/ClassSetupModel";
import { FeesAmountModel } from "../Models/FeesAmountModel";
import { classsetupviewmodel } from "./classsetupviewmodel";

export class feesdetailviewmodel
{
    class_id?:string;
    amount?:string;
    fees_category_id?:string;
    fees_amounts:FeesAmountModel[]=[];
    class_name:ClassSetupModel[]=[];
}