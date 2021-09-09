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
    return this.http.get<Mygroup>("http://localhost:8081/physio-node/group/all/1");
    
  }
  executeGetAllGroups(){
    return this.http.get<Mygroup>("http://localhost:8081/physio-node/group/all");
    
  }

  executeGetGroupByGroupId(id){
    return this.http.get<Mygroup>(`http://localhost:8081/physio-node/group/${id}`);
    
  }

  executeCreateGroup(mygroup){
    return this.http.post("http://localhost:8081/physio-node/group/create", mygroup);
    
  }

  executechangeGroupInfo(mygroup){
    return this.http.put("http://localhost:8081/physio-node/group/changeGroupInfo", mygroup);
  }

}