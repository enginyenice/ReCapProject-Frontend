import { Customer } from "./customer";

export interface CustomerResponseModel{
    data:Customer[],
    message:String,
    success:Boolean
}