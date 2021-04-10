import { LoginModel } from "./loginModel";

export interface RegisterModel extends LoginModel{
    firstName:string,
    lastName:string
}