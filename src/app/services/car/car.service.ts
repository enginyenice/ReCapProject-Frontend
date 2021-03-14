import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {


    
    constructor(private httpClient:HttpClient) { }
  
    getCar():Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +'cars/getcarsdetail';
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByBrand(brandId:Number):Observable<ListResponseModel<Car>>{
      let newPath = environment.apiUrl +`cars/getbybrand?brandid=${brandId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarByColor(colorId:Number):Observable<ListResponseModel<Car>>{
      console.log("service",colorId)
      let newPath = environment.apiUrl +`cars/getbycolor?colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
}
