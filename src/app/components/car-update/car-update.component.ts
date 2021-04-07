import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/Car';
import { Color } from 'src/app/models/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  car: Car;
  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getBrands();
        this.getColors();
        this.getCar(params['carId']);
        this.createCarUpdateForm();
        
      }
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCar(id: number) {
    this.carService.getCar(id).subscribe((response) => {
      this.car = response.data;
      this.dataLoaded = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['',[Validators.required, Validators.min(1945)],
      ],
      dailyPrice: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({id:this.car.id}, this.carUpdateForm.value);
      this.carService.update(carModel).subscribe(
        (response) => {
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
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
