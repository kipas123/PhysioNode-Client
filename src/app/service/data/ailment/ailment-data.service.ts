import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';

@Injectable({
  providedIn: 'root'
})
export class AilmentDataService {
  headers: HttpHeaders;
  currentUser: UserReadModel;
  constructor(
    private http:HttpClient,  private router: Router
    ) { }

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
    executeGetUserAilmentByIdUser(id){
      return this.http.get<AilmentReadModel>(`http://localhost:8081/physio-node/ailment/user/${id}`, {headers:this.getCurrentUserHeader()});
    }

    executeGetAilmentByIdAilment(id){
      return this.http.get<AilmentReadModel>(`http://localhost:8081/physio-node/ailment/${id}` , {headers:this.getCurrentUserHeader()});
    }

    executeCreateAilment(ailment){
      return this.http.post("http://localhost:8081/physio-node/ailment/create", ailment, {headers:this.getCurrentUserHeader()});
      
    }
    executeCreateAilmentNote(ailmentNote){
      return this.http.post("http://localhost:8081/physio-node/ailment/createAilmentNote", ailmentNote , {headers:this.getCurrentUserHeader()});
      
    }
    executeCreateAilmentIndication(ailmentIndication){
      return this.http.post("http://localhost:8081/physio-node/ailment/createAilmentIndication", ailmentIndication, {headers:this.getCurrentUserHeader()});
      
    }
}
