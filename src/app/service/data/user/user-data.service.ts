import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/objModel/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeGetUserByIdUser(id){
    return this.http.get<User>(`http://localhost:8081/physio-node/user/${id}`);
    
  }
}
