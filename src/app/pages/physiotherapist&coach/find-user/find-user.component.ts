import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent implements OnInit {
  searchUserFiltr: string;
  alertDangerSearchUser: boolean = false;
  searchUsers: UserReadModel = null;
  constructor(private userDataService: UserDataService, private userIdService:UserIdDataService,
    private router:Router) { }

  ngOnInit(): void {
  }

searchUser(){
  this.alertDangerSearchUser = false;
this.userDataService.executeGetUserByEmailOrNameOrSurname(this.searchUserFiltr).subscribe(
  response=>{
    this.searchUsers = response;
    if(this.searchUsers==null) this.alertDangerSearchUser = true;
  }
)

}

endSearch(){
  this.searchUsers = null
}

goToUserManagement(userId: number){
  this.userIdService.changeIduser(userId);
  this.router.navigate(['/pages/user-management']);
}

onClose(){
  this.alertDangerSearchUser = false;
}

}
