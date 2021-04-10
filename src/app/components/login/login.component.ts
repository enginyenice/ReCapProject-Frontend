import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toasterService: ToastrService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          this.toasterService.info(response.message, 'Giriş İşlemi');
          this.localStorageService.set("token",response.data.token);
          this.getUserDto(this.loginForm.value.email);
        },
        (responseError) => {
          this.toasterService.error(
            responseError.error.message,
            'Giriş Hatası'
          );
        }
      );
    }
  }
  getUserDto(email: string) {
    let userModel = Object.assign({ email: email });
    this.userService.getUserDto(userModel).subscribe((response) => {
      console.log(response);
      this.localStorageService.set("fullName",response.data.firstName+" "+response.data.lastName);
      this.localStorageService.set("email",response.data.email);
    });
  }
}
