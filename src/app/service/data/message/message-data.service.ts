import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageReadModel } from 'app/objModel/message/messageReadModel';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {
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

  executeGetMessage(ailmentid, size, page){
    return this.http.get<MessageReadModel>(`http://localhost:8081/physio-node/message/getMessage/${ailmentid}/${size}/${page}`);
  }
  executeCountMessage(ailmentid){
    return this.http.get<number>(`http://localhost:8081/physio-node/message/countMessage/${ailmentid}`);
  }

  executeSendMessage(message){
    return this.http.post("http://localhost:8081/physio-node/message/sendMessage", message);
  }

}
