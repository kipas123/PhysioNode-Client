import { T } from '@angular/cdk/keycodes';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { AilmentWriteModel } from 'app/objModel/ailment/ailmentWriteModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
currentUser: UserReadModel;
userId: number;
user:UserReadModel;
ailments:AilmentReadModel;
ailment:AilmentWriteModel = new AilmentWriteModel(null,null,null,null);
alertIsOpen: boolean = false;

  constructor(private userService:UserDataService, private ailmentService:AilmentDataService,
   private ailmentIdService: AilmentIDDataService,private userIdService: UserIdDataService, private router: Router ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    }

  ngOnInit(): void {
    this.getUserId();
    //console.log(this.userId);
    this.refreshUserInfo();
  }

  getUserId(){
    this.userIdService.currentIduser.subscribe(
      userId => this.userId = userId
    );
  }

  refreshUserInfo(){
    if(this.userId==-1){
      this.router.navigate(["/pages/not-found"]);
      return false;
    }
    this.userService.executeGetUserByIdUser(this.userId).subscribe(
      response => {
        this.user = response;
        console.log(this.user.userId);
       // console.log(response.email);
      }
    )
      this.ailmentService.executeGetUserAilmentByIdUser(this.userId).subscribe(
        response => {
          this.ailments = response;
         // console.log(response.email);
        }
    )
  }

  createAilment(){
    this.ailment.user = this.userId;
    this.ailment.attendingphysician = this.currentUser.userId;
    this.ailmentService.executeCreateAilment(this.ailment)
    .subscribe (
      data => {
       // setTimeout(()=>{  this.refreshUserInfo();}, 200)
        this.refreshUserInfo();
        this.alertIsOpen=true;
      }
    )
    console.log(this.ailment);
    //this.refreshUserInfo();

  }

  goToAilment(id: number){
    this.ailmentIdService.changeIdailment(id);
    console.log(this.user.userId);
    this.userIdService.changeIduser(this.user.userId);
    this.router.navigate(['/pages/ailment-management']);

  }

  onClose(){
    this.alertIsOpen=false;
  }

}
