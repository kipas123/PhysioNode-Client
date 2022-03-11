import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseReadModel } from 'app/objModel/exercise/exerciseReadModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { ExerciseDataService } from 'app/service/data/exercise/exercise-data.service';
import { MessageDataService } from 'app/service/data/message/message-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { ExerciseIdDataService } from 'app/service/exercise-id-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'user-exercise',
  templateUrl: './user-exercise.component.html',
  styleUrls: ['./user-exercise.component.scss']
})
export class UserExerciseComponent implements OnInit {
  messengerUserId: number;
  messengerMessageRoomId: number;
  currentUser:UserReadModel;
  exerciseId: number;
  userExercise: ExerciseReadModel;
  constructor(private exerciseDataService:ExerciseDataService, private userDataService:UserDataService,
    private exerciseIdService: ExerciseIdDataService, private userIdService: UserIdDataService,
    private router: Router, private messageDataService:MessageDataService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.messengerUserId = this.currentUser.userId;
    console.log("Tu jestem" + this.messengerUserId);
    this.exerciseIdService.currentIdExercise.subscribe(
      exerciseId => {this.exerciseId = exerciseId;
      });
      this.refreshExercise();
      
  }

  refreshExercise(){
    if(this.exerciseId==-1){
      this.router.navigate(["/pages/not-found"]);
      return false;
    }

    this.exerciseDataService.executeGetExerciseByExerciseId(this.exerciseId).subscribe(
      response => {
        this.userExercise = response;
        this.getMessageRoom();
        this.exerciseIdService.changeIdExercise(-1);
      }
    );

  }
  getMessageRoom(){
    let messageRoomId: number;
    this.messageDataService.executeGetMessageRoom(this.currentUser.userId, this.userExercise.attendingCoach.userId).subscribe(
      response => {
          messageRoomId = response;
          if(messageRoomId!=0){
            this.messengerMessageRoomId = messageRoomId;
          }
      }
    );
  }

}
