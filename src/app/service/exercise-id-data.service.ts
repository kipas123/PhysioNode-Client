import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseIdDataService {
  private idexerciseSource = new BehaviorSubject<number>(-1);
  currentIdExercise = this.idexerciseSource.asObservable();
  constructor() { }
  
  changeIdExercise(id: number){
    this.idexerciseSource.next(id);
  }
}
