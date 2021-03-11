import { Rental } from "./rental";

export interface RentalResponseModel{
    data:Rental[],
    message:String,
    success:Boolean
}