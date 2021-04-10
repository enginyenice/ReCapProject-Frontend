import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';

@Component({
  selector: 'app-navigation-auth',
  templateUrl: './navigation-auth.component.html',
  styleUrls: ['./navigation-auth.component.css']
})
export class NavigationAuthComponent implements OnInit {

  constructor(private authService:AuthService,private localStorageService:LocalStorageService) { }

  authStatus:boolean = false;
  fullName:any = "";
  ngOnInit(): void {
    this.isAuth();
    
  }
  isAuth(){
    this.authStatus =  this.authService.isAuthenticated();
    if(this.authStatus){
        this.fullName = (localStorage.getItem("fullName") !== null)? localStorage.getItem("fullName") : " ";
    }
  }
  logout(){
    this.localStorageService.clear();
    this.isAuth();
  }


}
