import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  
  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>>{
    let apiUrl = environment.apiUrl +'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(apiUrl);
  }
  add(color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'colors/add';
    return this.httpClient.post<ResponseModel>(apiUrl,color);
  }
  getColor(id:Number):Observable<ItemResponseModel<Color>>{
    let apiUrl = environment.apiUrl +'Colors/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Color>>(apiUrl);
  }
  update(Color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'Colors/update';
    return this.httpClient.post<ResponseModel>(apiUrl,Color)
  }
}
