import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AilmentIDDataService {
  private idailmentSource = new BehaviorSubject<number>(-1);
  currentIdailment = this.idailmentSource.asObservable();

  constructor() { }

  changeIdailment(id: number){
    this.idailmentSource.next(id);
  }
}
