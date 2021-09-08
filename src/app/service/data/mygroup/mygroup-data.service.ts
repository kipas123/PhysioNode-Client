import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mygroup } from 'app/objModel/mygroup.model';

@Injectable({
  providedIn: 'root'
})
export class MygroupDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeGetAllGroupsByUserId(){
    return this.http.get<Mygroup>("http://localhost:8081/physio-node/group/1");
    
  }
  executeGetAllGroups(){
    return this.http.get<Mygroup>("http://localhost:8081/physio-node/group/all");
    
  }

  async executeCreateGroup(mygroup){
    return await this.http.post("http://localhost:8081/physio-node/group/create", mygroup);
    
  }

}