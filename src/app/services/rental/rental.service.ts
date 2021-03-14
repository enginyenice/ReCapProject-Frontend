import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = environment.apiUrl +'rentals/getallrentaldetails'
  constructor(private httpClient:HttpClient) { }
  getRental(): Observable<ListResponseModel<Rental>>{

    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);

  }
}
