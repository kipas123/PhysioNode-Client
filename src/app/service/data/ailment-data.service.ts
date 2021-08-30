import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.mode';

@Injectable({
  providedIn: 'root'
})
export class AilmentDataService {

  constructor(
    private http:HttpClient
    ) { }
    executeHelloUserBeanService(){
      return this.http.get<Ailment>("http://localhost:8081/physio-node/ailment/1");
    }
}
