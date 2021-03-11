import { Color } from "./color";

export interface ColorResponseModel{
    success: boolean,
    message:String,
    data: Color[],
}