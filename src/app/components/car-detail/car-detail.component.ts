import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailAndImagesDto } from 'src/app/models/car/carDetailAndImagesDto';
import { CarDetailService } from 'src/app/services/car-detail/car-detail.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  carDetail:CarDetailAndImagesDto;
  dataLoaded = false;
  imageBasePath = environment.baseUrl
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
      }
     
    });
  }

  getCarDetail(carId:Number){
    this.carDetailService.getCarDetail(carId).subscribe(response => {
      
      this.carDetail = response.data;
      console.log(this.carDetail.carImages);



      this.dataLoaded = true;
    })
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

}
