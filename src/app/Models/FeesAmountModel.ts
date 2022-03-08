import { ClassSetupModel } from "./ClassSetupModel";
import { FeesCategoryModel } from "./FeesCategoryModel";

export class FeesAmountModel{
    Fees?:FeesCategoryModel;
    amount?:string;
    class_id?:string;
    fees_category_id:string="";
    name?:string;
    section?:ClassSetupModel;
    id?:number;
}