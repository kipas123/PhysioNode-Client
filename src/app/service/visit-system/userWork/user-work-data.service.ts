import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { currentDateAndUserDTO } from 'app/objModel/visit_system/currentDateAndUserDTO.model';
import { UserWorkHourReadModel } from 'app/objModel/visit_system/visit_system_userWorkHour/userWorkHourReadModel.model';
import { WorkHourListOfAvailableHour } from 'app/objModel/visit_system/visit_system_userWorkHour/workHourListOfAvailableHour.model';
let API_URL = "http://localhost:8081/physio-node/visit-system/";
@Injectable({
  providedIn: 'root'
})
export class UserWorkDataService {

  constructor(private http:HttpClient,  private router: Router) {
  }

  executeGetListOfAvailableHour(currentDateAndUser){
    return this.http.post<WorkHourListOfAvailableHour[]>(API_URL + `listOfAvailableHour`, currentDateAndUser);
  }
  executeGetUserWorkHour(currentDateAndUser){
    return this.http.post<UserWorkHourReadModel[]>(API_URL + `getUserWorkHour`, currentDateAndUser);
  }

  executeCreateWorkHour(userWorkHourWriteModel){
    return this.http.post(API_URL + `createWorkHour`, userWorkHourWriteModel);
  }

  executeGetListOfAvailableDay(currentDateAndUser){
    return this.http.post<number[]>(API_URL + `listOfAvailableDay`, currentDateAndUser);
  }

  executeGetUserAvailableTerms(currentDateAndUser){
    return this.http.post<WorkHourListOfAvailableHour[]>(API_URL + `getUserAvailableTerms`, currentDateAndUser);
  }

  executeDeleteWorkHourByIdWorkHour(workHourId){
    return this.http.get(API_URL + `deleteWorkHourByIdWorkHour/${workHourId}`);
  }

}
