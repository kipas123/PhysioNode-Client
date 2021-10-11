import { Component, OnInit } from '@angular/core';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.scss']
})
export class UserActivationComponent implements OnInit {
  alertIsOpen: boolean = false;
  chosenUsers: UserReadModel;
  roleSearchFiltr: String = "";

  constructor(private userService:UserDataService) { }

  ngOnInit(): void {
  }

  searchUserForRoleChange(){
      this.userService.executeGetUserByEmailOrNameOrSurname(this.roleSearchFiltr).subscribe(
        response => {
          this.chosenUsers = response;
        }
      )
  }
  changeUserRole(userId, roleId){
    this.userService.executeChangeUserRole(userId,roleId).subscribe(
      response=> {
        this.alertIsOpen=true;
        this.searchUserForRoleChange();
      }
    )
  }
  onClose(){
    this.alertIsOpen=false;
  }

}
