import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserWriteModel } from 'app/objModel/user/userWriteMode.model';
import { AuthDataService } from 'app/service/data/auth/auth-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  redirectDelay: number;
  showMessages: any;
  errors: string[];
  messages: string[];
 user: UserWriteModel;

  rememberMe: boolean;
  constructor(private authDataService: AuthDataService, private router: Router){
    this.user = new UserWriteModel(-1,"","","","",null);
  }
  
  ngOnInit() {
    if(this.authDataService.currentUserValue) {
      this.router.navigate(['/home']);
      return;
    }
  }

  login() {
    this.authDataService.login(this.user).subscribe(data => {
      this.router.navigate(['/home']);
      window.location.reload();
    }, err => {
      console.log("Niepoprawny email lub hasło");
    });
  }

}
