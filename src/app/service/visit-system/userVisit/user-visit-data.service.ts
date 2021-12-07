import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserVisitReadModel } from 'app/objModel/visit_system/visit_system_userVisit/userVisitReadModel.model';
let API_URL = "http://localhost:8081/physio-node/visit-system/";
@Injectable({
  providedIn: 'root'
})
export class UserVisitDataService {

  constructor(private http:HttpClient,  private router: Router) { }

  executeGetVisitToAccept(currentDateAndUser){
    return this.http.post<UserVisitReadModel[]>(API_URL + `getVisitToAccept`, currentDateAndUser);
  }

  executeGetVisit(currentDateAndUser){
    return this.http.post<UserVisitReadModel[]>(API_URL + `getVisit`, currentDateAndUser);
  }

  executeBookVisit(userVisitWriteModel){
    return this.http.post(API_URL + `bookVisit`, userVisitWriteModel);
  }

  executeGetUserUpcomingVisit(currentDateAndUser){
    return this.http.post<UserVisitReadModel[]>(API_URL + `getUserUpcomingVisit`, currentDateAndUser);
  }

  executeGetUserVisit(userId){
    return this.http.get<UserVisitReadModel[]>(API_URL + `getUserVisit/${userId}`);
  }

  executeGetProviderVisit(userId){
    return this.http.get<UserVisitReadModel[]>(API_URL + `getProviderVisit/${userId}`);
  }
}
