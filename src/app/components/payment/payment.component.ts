import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailAndImagesDto } from 'src/app/models/car/carDetailAndImagesDto';
import { Rental } from 'src/app/models/rental/rental';
import { CarDetailService } from 'src/app/services/car-detail/car-detail.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute,private carDetailService:CarDetailService,
    private router:Router,private toastr: ToastrService, private paymentService:PaymentService
    ) { }
  rental:Rental;
  carDetail:CarDetailAndImagesDto
  amountOfPayment:number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["rental"]){
        this.rental = JSON.parse(params['rental']);
        this.getRental();
        this.getCarDetail();
      }
    })
    
  }


  getRental(){
    console.log(this.rental);
  }
  getCarDetail(){
    this.carDetailService.getCarDetail(this.rental.carId).subscribe(response => {
     this.carDetail = response.data;
     this.paymentCalculator(); 
    })
  }
  paymentCalculator(){
  
    if(this.rental.returnDate != null ){
      var date1 = new Date(this.rental.returnDate.toString());
      var date2 = new Date(this.rental.rentDate.toString());
      var difference = date1.getTime() - date2.getTime();
    
    //zamanFark değişkeni ile elde edilen saati güne çevirmek için aşağıdaki yöntem kullanılabilir.
    var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24)); 
    
    this.amountOfPayment = numberOfDays * this.carDetail.car.dailyPrice;
    if(this.amountOfPayment <= 0){
      this.router.navigate(['/cars']);
      this.toastr.error("Araç listesine yönlendiriliyorsunuz", "Hatalı işlem");
    }
    }
  }
  pay(){
    this.paymentService.pay(this.rental,this.amountOfPayment).subscribe(response => {
      this.router.navigate(['/cars']);
      this.toastr.success(response.message.toString(), "İşlem Başarılı");
    })
  }

}
