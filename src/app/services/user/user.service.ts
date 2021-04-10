import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { UserDto } from 'src/app/models/user/userDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  
  constructor(private httpClient:HttpClient) { }
  getUserDto(userDto:UserDto): Observable<ItemResponseModel<UserDto>>{
    let apiUrl = environment.apiUrl +'users/getbyemaildto'
    return this.httpClient.post<ItemResponseModel<UserDto>>(apiUrl,userDto);
  }
  update(userDto:UserDto){
    let apiUrl = environment.apiUrl +'users/update'
    return this.httpClient.post<ResponseModel>(apiUrl,userDto);
  }

  
}
