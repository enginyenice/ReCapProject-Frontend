import { Car } from "./car";

export interface CarResponseModel{
    data:Car[],
    message:String,
    success:Boolean
}