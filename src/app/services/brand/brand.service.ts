import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from 'src/app/models/brand/brand';
import { ResponseModel } from 'src/app/models/responseModel';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let apiUrl = environment.apiUrl +'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(apiUrl);
  }
  add(brand:Brand):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'brands/add';
    return this.httpClient.post<ResponseModel>(apiUrl,brand)
  }
  update(brand:Brand):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'brands/update';
    return this.httpClient.post<ResponseModel>(apiUrl,brand)
  }
  getBrand(id:Number):Observable<ItemResponseModel<Brand>>{
    let apiUrl = environment.apiUrl +'brands/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Brand>>(apiUrl);
  }

}
