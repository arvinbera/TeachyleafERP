import { ClassSetupModel } from "../Models/ClassSetupModel";
import { FeesAmountModel } from "../Models/FeesAmountModel";
import { FeesCategoryModel } from "../Models/FeesCategoryModel";

export class feesamountviewmodel{
    fees:FeesAmountModel[]=[];
    bind_fees_category:FeesCategoryModel[]=[];
    bind_all_classes:ClassSetupModel[]=[];
    fees_category_id:string="";
    class_id?:number;
    amount:string="";
}