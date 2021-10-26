import { Component, OnInit } from '@angular/core';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AuthDataService } from 'app/service/data/auth/auth-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
userEmail: String;
alertIsOpen: boolean = false;
  constructor(private authDataService: AuthDataService) { }

  ngOnInit(): void {
  }


  passwordReset(){
    this.authDataService.executeGenerateResetToken(this.userEmail).subscribe();
    this.alertIsOpen = true;
    console.log(this.userEmail);
  }
  onClose(){
    this.alertIsOpen = false;
  }
}
