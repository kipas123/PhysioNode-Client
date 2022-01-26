import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseDetailsWriteModel } from 'app/objModel/exercise/exerciseDetailsWriteModel.model';
import { exerciseReadModel } from 'app/objModel/exercise/exerciseReadModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { ExerciseDataService } from 'app/service/data/exercise/exercise-data.service';
import { MessageDataService } from 'app/service/data/message/message-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { ExerciseIdDataService } from 'app/service/exercise-id-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'exercise-management',
  templateUrl: './exercise-management.component.html',
  styleUrls: ['./exercise-management.component.scss']
})
export class ExerciseManagementComponent implements OnInit {
  currentExerciseId: number;
  exercise: exerciseReadModel;
  currentUser: UserReadModel;
  userId: number;
  user: UserReadModel;
  messengerUserId: number;
  messengerMessageRoomId: number;
  exerciseDetailsWriteModel = new ExerciseDetailsWriteModel(null,null,null);
  test:boolean = false;
  alertCreateExerciseDetailIsOpen: boolean = false;
  constructor(private exerciseDataService:ExerciseDataService, private userService:UserDataService,
    private exerciseIdService: ExerciseIdDataService, private userIdService: UserIdDataService,
    private router: Router, private messageDataService:MessageDataService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.messengerUserId = this.currentUser.userId;
    console.log("To ja: " + this.messengerUserId);
    this.getExerciseIdAndUserId();
    this.getProfile();
    this.refreshExerciseInfo();
  }

  getExerciseIdAndUserId(){
    this.exerciseIdService.currentIdExercise.subscribe(
      exerciseId => this.currentExerciseId = exerciseId
    );
    this.userIdService.currentIduser.subscribe(
      userId => this.userId = userId
    );
  }
  getProfile(){
    if(this.userId == -1){
      this.router.navigate(['/pages/not-found']);
      return false;
    }
    this.userService.executeGetUserByIdUser(this.userId).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
  }


  refreshExerciseInfo(){
    if(this.currentExerciseId == -1){
      this.router.navigate(['/pages/not-found']);
      return false;
    }
    this.exerciseDataService.executeGetExerciseByExerciseId(this.currentExerciseId).subscribe(
      response => {
        this.exercise = response;
        console.log(this.exercise);
        this.getMessageRoom();
      }
    )
  }


  getMessageRoom(){
    let messageRoomId: number;
    this.messageDataService.executeGetMessageRoom(this.currentUser.userId, this.user.userId).subscribe(
      response => {
          messageRoomId = response;
          if(messageRoomId!=0){
            this.messengerMessageRoomId = messageRoomId;
          }
      }
    );

  }
  createExerciseDetail(){
    this.exerciseDetailsWriteModel._exerciseBook = this.currentExerciseId;
    this.exerciseDataService.executeCreateExerciseDetail(this.exerciseDetailsWriteModel).subscribe(
      response => {
          this.refreshExerciseInfo();
          this.alertCreateExerciseDetailIsOpen = true;
      }
    );

  }
}
