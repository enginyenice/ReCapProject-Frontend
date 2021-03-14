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


    apiUrl = environment.apiUrl +'cars/getcarsdetail';
    constructor(private httpClient:HttpClient) { }
  
    getCar():Observable<ListResponseModel<Car>>{
      return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
    }
}
