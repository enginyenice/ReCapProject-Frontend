import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,

    private toastrService: ToastrService
  ) { }
  carAddForm: FormGroup;
  brands: Brand[]
  colors: Color[]
  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.createCarAddForm();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
    this.brands = response.data;
  })
}

getColors(){
  this.colorService.getColors().subscribe(response => {
  this.colors = response.data;
})
}


  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId:['',Validators.required],
      colorId:['',Validators.required],
      modelYear:['',[Validators.required,Validators.min(1945)]],
      dailyPrice:['',[Validators.required,Validators.min(0)]],
      description:['',[Validators.required,Validators.minLength(2)]]

    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      },
      (responseError) => {
        if (responseError.error.Errors.length > 0) {
          for (
            let index = 0;
            index < responseError.error.Errors.length;
            index++
          ) {
            this.toastrService.error(
              responseError.error.Errors[index].ErrorMessage,
              'Doğrulama Hatası'
            );
          }
        }
      })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}
