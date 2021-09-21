import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MygroupIdDataService {
  private idMygroupSource = new BehaviorSubject<number>(-1);
  currentIdmygroup = this.idMygroupSource.asObservable();

  constructor() { }

  changeIdmygroup(id: number){
    this.idMygroupSource.next(id);
  }
  
}
