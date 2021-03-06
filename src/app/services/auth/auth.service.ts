import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { RegisterModel } from 'src/app/models/auth/registerModel';
import { TokenModel } from 'src/app/models/auth/tokenModel';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    let apiUrl = environment.apiUrl +'auth/login';
    return this.httpClient.post<ItemResponseModel<TokenModel>>(apiUrl,loginModel)
  }
  register(registerModel:RegisterModel){
    let apiUrl = environment.apiUrl +'auth/register';
    return this.httpClient.post<ItemResponseModel<TokenModel>>(apiUrl,registerModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
}
