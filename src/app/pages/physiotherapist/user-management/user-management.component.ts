import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { User } from 'app/objModel/user.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
user:User;
ailments:Ailment

  constructor(private userService:UserDataService, private ailmentService:AilmentDataService) { }

  ngOnInit(): void {
    this.refreshUserInfo();
  }
  refreshUserInfo(){
    this.userService.executeGetUserByIdUser(2).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
      this.ailmentService.executeGetUserAilmentByIdUser(2).subscribe(
        response => {
          this.ailments = response;
         // console.log(response.email);
        }
    )
  }

}
