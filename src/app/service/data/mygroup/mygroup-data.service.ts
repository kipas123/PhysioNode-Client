import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Mygroup } from 'app/objModel/mygroup.model';
import { UserReadModel } from 'app/objModel/userReadModel.model';

@Injectable({
  providedIn: 'root'
})
export class MygroupDataService {
  headers: HttpHeaders;
  currentUser: UserReadModel;
  constructor(
    private http:HttpClient, private router: Router) { }

   private getCurrentUserHeader() : HttpHeaders{
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/pages/login']);
    }
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    return this.headers;
  }

  executeGetAllGroupsByUserId(id){
    return this.http.get<Mygroup>(`http://localhost:8081/physio-node/group/all/${id}`, {headers:this.getCurrentUserHeader()});
    
  }
  executeGetAllGroups(){
    return this.http.get<Mygroup>("http://localhost:8081/physio-node/group/all", {headers:this.getCurrentUserHeader()});
    
  }

  executeGetGroupByGroupId(id){
    return this.http.get<Mygroup>(`http://localhost:8081/physio-node/group/${id}`, {headers:this.getCurrentUserHeader()});
    
  }

  executeCreateGroup(mygroup){
    return this.http.post("http://localhost:8081/physio-node/group/create", mygroup, {headers:this.getCurrentUserHeader()});
    
  }

  executechangeGroupInfo(mygroup){
    return this.http.put("http://localhost:8081/physio-node/group/changeGroupInfo", mygroup, {headers:this.getCurrentUserHeader()});
  }

}