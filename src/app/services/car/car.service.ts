import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/Car';
import { CarDto } from 'src/app/models/car/carDto';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {


    
    constructor(private httpClient:HttpClient) { }
  
    getCars():Observable<ListResponseModel<CarDto>>{
      let newPath = environment.apiUrl +'cars/getcarsdetail';
      return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
    }
    getCarByBrand(brandId:Number):Observable<ListResponseModel<CarDto>>{
      let newPath = environment.apiUrl +`cars/getbybrand?brandid=${brandId}`;
      return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
    }
    getCarByColor(colorId:Number):Observable<ListResponseModel<CarDto>>{
      let newPath = environment.apiUrl +`cars/getbycolor?colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
    }
    getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<CarDto>>{
      let newPath = environment.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
      return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
    }
    getCar(id:Number):Observable<ItemResponseModel<Car>>{
      let apiUrl = environment.apiUrl +'cars/getbyid?id='+id;
      return this.httpClient.get<ItemResponseModel<Car>>(apiUrl);
    }


    add(car:CarDto):Observable<ResponseModel>{
      let newPath = environment.apiUrl +`cars/add`;
      return this.httpClient.post<ResponseModel>(newPath,car);
    }
    update(car:Car):Observable<ResponseModel>{
      let newPath = environment.apiUrl +`cars/update`;
      return this.httpClient.post<ResponseModel>(newPath,car);
    }
    
}
