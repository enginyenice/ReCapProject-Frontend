import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarResponseModel } from '../../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {


    apiUrl = environment.apiUrl +'cars/getcarsdetail';
    constructor(private httpClient:HttpClient) { }
  
    getCar():Observable<CarResponseModel>{
      return this.httpClient.get<CarResponseModel>(this.apiUrl);
    }
}
