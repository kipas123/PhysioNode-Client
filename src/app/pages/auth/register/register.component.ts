import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserWriteModel } from 'app/objModel/user/userWriteMode.model';
import { AuthDataService } from 'app/service/data/auth/auth-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
user: UserWriteModel;
repeatPassword: String;

  constructor(private authDataService: AuthDataService, private router: Router) {
    this.user = new UserWriteModel(-1,"","","","",null);
   }

  ngOnInit(): void {

  }

  register(){
    console.log(this.user);

    this.authDataService.register(this.user).subscribe( response =>{
      if(response){
        this.router.navigate(['/pages/profile']);
      }
      return response;
    }
    );
  }

}
