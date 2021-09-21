import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIdDataService {

  private idUserSource = new BehaviorSubject<number>(-1);
  currentIduser = this.idUserSource.asObservable();

  constructor() { }

  changeIduser(id: number){
    this.idUserSource.next(id);
  }
}
