import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceTypeReadModel } from 'app/objModel/visit_system/visit_system_userServiceType/userServiceTypeReadModel.model';
import { UserServiceTypeWriteModel } from 'app/objModel/visit_system/visit_system_userServiceType/userServiceTypeWriteModel.model';
let API_URL = "http://localhost:8081/physio-node/visit-system/";
@Injectable({
  providedIn: 'root'
})
export class UserServiceTypeDataService {

  constructor(private http:HttpClient,  private router: Router) { }


  executeGetUserServiceType(userId){
    return this.http.get<UserServiceTypeReadModel[]>(API_URL + `getUserServiceType/${userId}`);
  }

  executeCreateUserServiceType(userServiceTypeWriteModel){
    return this.http.post(API_URL + `createUserServiceType`, userServiceTypeWriteModel);
  }

  executeGetAvailableUserServiceType(chosenTermDTO){
    return this.http.post<UserServiceTypeReadModel>(API_URL+ `getAvailableUserServiceType`, chosenTermDTO);
  }

  executeDeleteServiceById(serviceId){
    return this.http.get(API_URL+ `deleteServiceById/${serviceId}`);
  }
}
