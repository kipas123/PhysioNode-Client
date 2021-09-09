import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';

@Injectable({
  providedIn: 'root'
})
export class AilmentDataService {

  constructor(
    private http:HttpClient
    ) { }
    executeGetUserAilmentByIdUser(id){
      return this.http.get<Ailment>(`http://localhost:8081/physio-node/ailment/user/${id}`);
    }

    executeGetAilmentByIdAilment(id){
      return this.http.get<Ailment>(`http://localhost:8081/physio-node/ailment/${id}`);
    }

    executeCreateAilment(ailment){
      return this.http.post("http://localhost:8081/physio-node/ailment/create", ailment);
      
    }
    executeCreateAilmentNote(ailmentNote){
      return this.http.post("http://localhost:8081/physio-node/ailment/createAilmentNote", ailmentNote);
      
    }
    executeCreateAilmentIndication(ailmentIndication){
      return this.http.post("http://localhost:8081/physio-node/ailment/createAilmentIndication", ailmentIndication);
      
    }
}
