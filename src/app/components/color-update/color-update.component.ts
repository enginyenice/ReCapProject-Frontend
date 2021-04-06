import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) { }
  colorUpdateForm: FormGroup;
  color:Color
  dataLoaded = false;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getColor(params['colorId']);
        this.createColorUpdateForm();
      }
    });
  }
  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }
  getColor(id:Number){
    this.colorService.getColor(id).subscribe(response => {
      this.color = response.data
      this.dataLoaded = true;
    })
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let ColorModel = Object.assign({id:this.color.id}, this.colorUpdateForm.value);
      console.log(ColorModel);
      this.colorService.update(ColorModel).subscribe(
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
