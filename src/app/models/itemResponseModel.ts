import { ResponseModel } from "./responseModel";

export interface ItemResponseModel<T>  extends ResponseModel{
    data:T
}