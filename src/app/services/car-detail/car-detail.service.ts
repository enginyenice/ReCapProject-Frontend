import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailAndImagesDto } from 'src/app/models/car/carDetailAndImagesDto';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:Number):Observable<ItemResponseModel<CarDetailAndImagesDto>>{
    let newPath = environment.apiUrl +'cars/getcardetail?carId='+carId;
    return this.httpClient.get<ItemResponseModel<CarDetailAndImagesDto>>(newPath);
  }

}
