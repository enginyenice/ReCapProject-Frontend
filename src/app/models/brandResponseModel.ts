import { Brand } from "./brand";

export interface BrandResponseModel{
    success:Boolean,
    message:String,
    data: Brand[]
}