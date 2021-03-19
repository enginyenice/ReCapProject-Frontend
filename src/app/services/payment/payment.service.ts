import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }
  pay(rental:Rental,amount:Number):Observable<ResponseModel>{
    let path = environment.apiUrl+"rentals/paymentadd";
    rental.returnDate = undefined;
    return this.httpClient.post<ResponseModel>(path,{payment:{amount:amount},rental:rental});
  }
}
