import { U } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserWriteModel } from 'app/objModel/user/userWriteMode.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
let API_URL = "http://localhost:8081/physio-node/user/";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  public currentUser: Observable<UserReadModel>;
  private currentUserSubject: BehaviorSubject<UserReadModel>;

  constructor(
    private http:HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<UserReadModel> (JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): UserReadModel {
    return this.currentUserSubject.value;
  }


  executeGetUserByIdUser(id){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/${id}`);
    
  }
  executeGetUserByEmailOrNameOrSurname(value){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/roleManagement/foundUser/${value}`);
    
  }

  executeGetUnverifiedUserByUserNameOrUserSurname(value){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/roleManagement/foundUserFiltr/${value}`);
    
  }
  executeGetVerifiedUserByUserNameOrUserSurname(value){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/roleManagement/foundVerifiedUserFiltr/${value}`);
    
  }
  executeChangeUserRole(userId: number,roleId: number){
    return this.http.get(`http://localhost:8081/physio-node/user/roleManagement/changeRole/${userId}/${roleId}`);
    
  }
  executeGetAllUnverfiedUser(page, size){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/roleManagement/unverified/${page}/${size}`);
    
  }
  executeGetUsersWithModRole(){
    return this.http.get<UserReadModel>(`http://localhost:8081/physio-node/user/roleManagement/modRole`);
    
  }
  executeGetCountOfUnverfiedUser(){
    return this.http.get<number>(`http://localhost:8081/physio-node/user/roleManagement/countUnverfied`);
    
  }

}
