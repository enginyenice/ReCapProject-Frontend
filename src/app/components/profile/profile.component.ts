import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDto } from 'src/app/models/user/userDto';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: UserDto;
  constructor(
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.createProfileForm();
  }
  profileForm:FormGroup
  createProfileForm(){
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }


  getUser() {
    this.userService
      .getUserDto(
        Object.assign({ email: this.localStorageService.get('email') })
      )
      .subscribe((response) => {
        console.log(response);
        this.user = response.data;
        console.log('user: ', this.user);
      });
  }
  update(){
    if(this.profileForm.valid){
      let profileModel = Object.assign({id:this.user.id, email:this.user.email},this.profileForm.value)
      this.userService.update(profileModel).subscribe(response => {
        console.log(response);
      })
    }
  }
}
