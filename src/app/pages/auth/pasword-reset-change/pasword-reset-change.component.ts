import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordResetModel } from 'app/objModel/user/passwordResetModel.model';
import { AuthDataService } from 'app/service/data/auth/auth-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'password-reset-change',
  templateUrl: './pasword-reset-change.component.html',
  styleUrls: ['./pasword-reset-change.component.scss']
})
export class PasswordResetChangeComponent implements OnInit {
 token: String;
 password: String;
 confirmPassword: number;
 alertIsOpen: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private authDataService: AuthDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params =>{
        this.token = params.get('token');
      }
    );
    this.isTokenValid(this.token);
  }

  isTokenValid(token: String){
    let isTokenValid: boolean;
      this.authDataService.executeIsResetTokenValid(this.token).subscribe(
        response => {
          isTokenValid = response;
          if(isTokenValid==false){
           this.router.navigate(['/home']);
          }
        },
        error=>{
          this.router.navigate(['/home']);
        }
      );
  }

  passwordChange(){
   let passwordResetModel: PasswordResetModel = new PasswordResetModel(this.token, this.password);
   this.authDataService.executeChangePasswordByResetToken(passwordResetModel).subscribe(
     response=>{
        this.alertIsOpen = true;
     }
   );
  }
  toLoginPage(){
    this.router.navigate(['/pages/login']);
  }
}
