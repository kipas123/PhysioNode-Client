import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseDetailsWriteModel } from 'app/objModel/exercise/exerciseDetailsWriteModel.model';
import { ExerciseReadModel } from 'app/objModel/exercise/exerciseReadModel.model';
import { exerciseWriteModel } from 'app/objModel/exercise/exerciseWriteModel.model';
let API_URL = "http://localhost:8081/physio-node/exercise/";
@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {

  constructor(private http:HttpClient,  private router: Router) { }

  executeGetUserExerciseByIdUser(id){
    return this.http.get<ExerciseReadModel[]>(API_URL + `user/${id}`);
  }

  executeCreateExercise(exerciseWriteModel: exerciseWriteModel){
    return this.http.post(API_URL + `create`, exerciseWriteModel);
  }
  executeGetExerciseByExerciseId(exerciseId: number){
    return this.http.get<ExerciseReadModel>(API_URL + `${exerciseId}`);
  }
  executeCreateExerciseDetail(exerciseDetailWriteModel: ExerciseDetailsWriteModel){
    return this.http.post(API_URL + `createExerciseDetail`, exerciseDetailWriteModel);
    
  }
  executeDeleteExerciseBook(exerciseBookId: number){
    return this.http.get(API_URL + `deleteExerciseBook/${exerciseBookId}`);
  }
}
