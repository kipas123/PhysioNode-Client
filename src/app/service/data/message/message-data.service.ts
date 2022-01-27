import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageNotificationDTO } from 'app/objModel/message/messageNotificationDTO.model';
import { MessageReadModel } from 'app/objModel/message/messageReadModel';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
let API_URL = "http://localhost:8081/physio-node/message/";
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
      return this.http.get<MessageReadModel>(API_URL + `getMessage/${ailmentid}/${size}/${page}`);
    }
    executeCountMessage(ailmentid){
      return this.http.get<number>(API_URL + `countMessage/${ailmentid}`);
    }
    
    executeSendMessage(message){
      return this.http.post(API_URL + "sendMessage", message);
    }
    
    executeGetMessageRoom(firstUserId, secondUserId){
      return this.http.get<number>(API_URL + `getMessageRoom/${firstUserId}/${secondUserId}`);
    }
    executeGetMessageByRoomId(messageRoomId: number, size: number, page: number) {
      return this.http.get<MessageReadModel[]>(API_URL + `getMessageByRoomId/${messageRoomId}/${size}/${page}`);
    }

    executeCountMessageByMessageRoomId(messageRoomId: number) {
      return this.http.get<number>(API_URL + `countMessageByMessageRoomId/${messageRoomId}`);
    }

    executeGetUserMessageNotification(userId){
      return this.http.get<MessageNotificationDTO[]>(API_URL + `getUserMessageNotification/${userId}`);
    }

    executeDeleteUserMessageNotification(messageNotification){
      return this.http.get(API_URL + `deleteUserMessageNotification/${messageNotification}`);
    }
    
  }
  