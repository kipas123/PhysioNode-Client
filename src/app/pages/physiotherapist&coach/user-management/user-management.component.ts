import { T } from '@angular/cdk/keycodes';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { AilmentWriteModel } from 'app/objModel/ailment/ailmentWriteModel.model';
import { ExerciseReadModel } from 'app/objModel/exercise/exerciseReadModel.model';
import { exerciseWriteModel } from 'app/objModel/exercise/exerciseWriteModel.model';
import { Mygroup } from 'app/objModel/mygroup/mygroup.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { ExerciseDataService } from 'app/service/data/exercise/exercise-data.service';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { ExerciseIdDataService } from 'app/service/exercise-id-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';
import { Console } from 'console';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
currentUser: UserReadModel;
userId: number;
user:UserReadModel;
userGroups: Mygroup;
ailments:AilmentReadModel;
userExercise: ExerciseReadModel[];
ailment:AilmentWriteModel = new AilmentWriteModel(null,null,null,null);
exerciseWriteModel =  new exerciseWriteModel(null,null,null,null);
alertCreateAilmentIsOpen: boolean = false;
alertCreateExerciseIsOpen: boolean = false;
  constructor(private userService:UserDataService, private ailmentService:AilmentDataService,
   private ailmentIdService: AilmentIDDataService,private userIdService: UserIdDataService, private router: Router,
   private mygroupDataService: MygroupDataService, private exerciseDataService: ExerciseDataService, private exerciseIdService: ExerciseIdDataService ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("B????d");
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
    this.getUser();
    this.getUserAilment();
    this.getUserGroups();
    this.getUserExercise();

  }

  createAilment(){
    this.ailment.user = this.userId;
    this.ailment.attendingphysician = this.currentUser.userId;
    this.ailmentService.executeCreateAilment(this.ailment)
    .subscribe (
      data => {
       // setTimeout(()=>{  this.refreshUserInfo();}, 200)
        this.refreshUserInfo();
        this.alertCreateAilmentIsOpen=true;
      }
    )
    console.log(this.ailment);
    //this.refreshUserInfo();

  }

  createExercise(){
    this.exerciseWriteModel._user = this.userId;
    this.exerciseWriteModel._attendingCoach = this.currentUser.userId;
    console.log(this.exerciseWriteModel);
    this.exerciseDataService.executeCreateExercise(this.exerciseWriteModel).subscribe(
      response => {
        this.refreshUserInfo();
        this.alertCreateExerciseIsOpen = true;
      }
    )

  }

  goToAilment(id: number){
    this.ailmentIdService.changeIdailment(id);
    console.log(this.user.userId);
    this.userIdService.changeIduser(this.user.userId);
    this.router.navigate(['/pages/ailment-management']);

  }

  goToExercise(id: number){
    this.exerciseIdService.changeIdExercise(id);
    this.userIdService.changeIduser(this.user.userId);
    this.router.navigate(['/pages/exercise-management']);

  }
  onClose(){
    this.alertCreateAilmentIsOpen=false;
    this.alertCreateExerciseIsOpen=false;
  }

  getUser(){
    this.userService.executeGetUserByIdUser(this.userId).subscribe(
      response => {
        this.user = response;
        console.log(this.user.userId);
       // console.log(response.email);
      }
    );
  }
  getUserAilment(){
    this.ailmentService.executeGetUserAilmentByIdUser(this.userId).subscribe(
      response => {
        this.ailments = response;
       console.log(this.ailments);
      }
  );
  }
  getUserGroups(){
    this.mygroupDataService.executeGetAllGroupByUserId(this.userId).subscribe(
      response => {
        this.userGroups = response;
      }
    );
  }
  getUserExercise(){
    this.exerciseDataService.executeGetUserExerciseByIdUser(1).subscribe(
      response => {
        this.userExercise = response;
      }
    );
  }
  isAilmentOwner(attendingPhysician:UserReadModel): boolean{
    if(this.currentUser.userId==attendingPhysician.userId){
      return true;
    }else{
      return false;
    }
  }

  isExerciseOwner(attendingCoach:UserReadModel): boolean{
    if(this.currentUser.userId==attendingCoach.userId){
      return true;
    }else{
      return false;
    }
  }

}
