import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseIdDataService {
  private idexerciseSource = new BehaviorSubject<number>(-1);
  currentIdExercise = this.idexerciseSource.asObservable();
  constructor() { }
  
  changeIdailment(id: number){
    this.idexerciseSource.next(id);
  }
}
