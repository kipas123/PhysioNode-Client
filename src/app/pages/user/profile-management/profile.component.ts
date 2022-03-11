import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordChangeModel } from 'app/objModel/user/passwordChangeModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AuthDataService } from 'app/service/data/auth/auth-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: UserReadModel;
  loading: boolean = false;
  passwordChangeModel: PasswordChangeModel;
  newPasswordRepeat: String = "";
  alertPasswordChange: boolean = false;
  alertPasswordChangeError: boolean = false;
  alertPasswordChangeCompareError: boolean = false;
  constructor(
    private service:UserDataService,
    private authDataService:AuthDataService,
    private router: Router
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.passwordChangeModel = new PasswordChangeModel(this.currentUser.userId, null,null);
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  changePassword(){

    if(this.passwordChangeModel._newPassword == this.newPasswordRepeat){
      this.authDataService.executeChangePassword(this.passwordChangeModel).subscribe(
        response =>{
          this.alertPasswordChange = true;
        },
        error => {
          this.alertPasswordChangeError = true;
        }
      );
    }else{
      this.alertPasswordChangeCompareError = true;
    }
  }
  onClose(){
    this.alertPasswordChange = false;
    this.alertPasswordChangeError = false;
    this.alertPasswordChangeCompareError = false;
  }

}
