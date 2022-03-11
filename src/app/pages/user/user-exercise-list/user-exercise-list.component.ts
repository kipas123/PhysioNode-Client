import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseReadModel } from 'app/objModel/exercise/exerciseReadModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { ExerciseDataService } from 'app/service/data/exercise/exercise-data.service';
import { ExerciseIdDataService } from 'app/service/exercise-id-data.service';

@Component({
  selector: 'user-exercise-list',
  templateUrl: './user-exercise-list.component.html',
  styleUrls: ['./user-exercise-list.component.scss']
})
export class UserExerciseListComponent implements OnInit {

  currentUser:UserReadModel;
  exercises:ExerciseReadModel[];

  constructor(private exerciseDataService: ExerciseDataService, private router: Router,
    private exerciseIdService: ExerciseIdDataService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/pages/login']);
    }
    this.refreshExercise();
  }

  refreshExercise(){
    this.exerciseDataService.executeGetUserExerciseByIdUser(this.currentUser.userId).subscribe(
      response => {
        this.exercises = response;
      }
    );
  }
  goToUserExercise(idExercise: number){
    this.exerciseIdService.changeIdExercise(idExercise);
    this.router.navigate(["/pages/exercise"]);
  }
}
