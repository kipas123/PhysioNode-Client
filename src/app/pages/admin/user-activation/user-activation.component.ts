import { Component, OnInit } from '@angular/core';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { count } from 'console';

@Component({
  selector: 'user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.scss']
})
export class UserActivationComponent implements OnInit {
  alertIsOpen: boolean = false;
  alertVeriviedIsOpen: boolean = false;
  chosenUsers: UserReadModel;
  unverfiedUsers: UserReadModel;
  unverfiedUsersPageSize: number = 2;
  unverfiedUsersFiltr: String;
  numberOfPage: number;
  searchAlert: boolean = false;
  buttonNextShow: boolean;
  buttonPreviewShow: boolean;

  roleSearchFiltr: String = "";
  page: number;
  constructor(private userService:UserDataService) { }

  ngOnInit(): void {
    this.unverfiedUsersFiltr = null;
    this.page=0;
    this.getUserModRole();
    this.getUnverfiedUser();
  }




  getUserModRole(){
    this.userService.executeGetUsersWithModRole().subscribe(
      response => {
        this.chosenUsers = response;
      }
    )
  }

  getUnverfiedUser(){
    let countUnverfiedUsers: number;
    this.userService.executeGetCountOfUnverfiedUser().subscribe(
      response=>{
        countUnverfiedUsers= response;
        if(countUnverfiedUsers%this.unverfiedUsersPageSize==0){
          this.numberOfPage = ~~(countUnverfiedUsers/this.unverfiedUsersPageSize);
          console.log("Jestem tu, elo: "+ this.numberOfPage);
        }else{
          this.numberOfPage = ~~(countUnverfiedUsers/this.unverfiedUsersPageSize)+1;
          console.log(this.numberOfPage);
        }
    });

    this.userService.executeGetAllUnverfiedUser(this.page, this.unverfiedUsersPageSize).subscribe(
      response =>{
        this.unverfiedUsers = response;
      }
    );
  }   

  searchUserForRoleChange(){
      this.userService.executeGetUserByEmailOrNameOrSurname(this.roleSearchFiltr).subscribe(
        response => {
          this.chosenUsers = response;
        }
      )
  }
  changeUserRole(userId, roleId, functionType){
    if(functionType==1){
      this.userService.executeChangeUserRole(userId,roleId).subscribe(
        response=> {
          this.getUnverfiedUser();
          this.alertVeriviedIsOpen=true;
        }
      );
    }else if(functionType==2){
      this.userService.executeChangeUserRole(userId,roleId).subscribe(
        response=> {
          this.searchUserForRoleChange();
          this.alertIsOpen=true;
        }
      );
    } 
  }
  onClose(){
    this.alertIsOpen=false;
  }

  searchUnverifiedUser(){
    this.userService.executeGetUnverifiedUserByUserNameOrUserSurname(this.unverfiedUsersFiltr).subscribe(
      response=>{
        this.unverfiedUsers = response;
        this.searchAlert = true;
      }
    )
  }

  closeSearchAlert(){
    this.searchAlert = false;
    this.unverfiedUsersFiltr = null;
    this.getUnverfiedUser();
  }



  incrementButton(){
    if(this.numberOfPage-1>this.page){
      this.page++;
    this.getUnverfiedUser();
    }else console.log("blad");
  }

  decrementButton(){
    if(this.page>0){
      this.page--;
    this.getUnverfiedUser();
  }else console.log("blad");
}

visibilityButtonNext(): boolean{
  if(this.numberOfPage>this.page+1) return true;
  else return false;
}
visibilityButtonPreview(): boolean{
  if(this.page>0) return true;
  else return false;
}

}
