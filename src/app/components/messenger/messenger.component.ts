import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MessageReadModel } from 'app/objModel/message/messageReadModel';
import { MessageWriteModel } from 'app/objModel/message/messageWriteModel';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { MessageDataService } from 'app/service/data/message/message-data.service';

@Component({
  selector: 'messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  lastRefreshTime: Date;
  FIRST_PAGE: number = 0;
  @Input("messageRoomId") messageRoomId: number;
  @Input("currentUser") currentUser: UserReadModel;
  messages: any[] = [];
  messagesFromService: MessageReadModel[];
  messagesFromServicePast: MessageReadModel;

  page: number = 1;
  numberOfPages: number;
  pageSize: number = 5;
  numberOfMessages: number;
    constructor(private http:HttpClient,
      private messageService:MessageDataService) { }
  
    ngOnInit(): void {
      
    }
    ngOnChanges() {
      /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
      //Write your code here
      if(this.messageRoomId!=null && this.currentUser!=null){
        this.getMessages(this.messageRoomId); 
        this.lastRefreshTime = new Date;
      }
      this.messages=[];
      }   
     


  getMessages(messageRoomId){
    console.log("Jestem w getMessage" + messageRoomId);
    this.messageService.executeGetMessageByRoomId(messageRoomId,this.pageSize, this.FIRST_PAGE).subscribe(
      response => {
        this.messagesFromService = response;
        this.createTable();
      }
    );
    this.messageService.executeCountMessageByMessageRoomId(messageRoomId).subscribe(
      response => {
        this.numberOfMessages = response;
        if(this.numberOfMessages%this.pageSize==0){
          this.numberOfPages = ~~(this.numberOfMessages/this.pageSize);
        }else{
          this.numberOfPages = ~~(this.numberOfMessages/this.pageSize)+1;
        }
      }
    );
  }
  
  
  
  refreshMessage(){
    this.messages = []
    this.page = 1;
    this.lastRefreshTime = new Date();
    this.getMessages(this.messageRoomId);
  }
  
  isMyMessage(id: number): boolean{
    if(id == this.currentUser.userId) return true;
    else return false;
  }
  
  
  createTable(){
    let type: number;
    for(let key in this.messagesFromService) {
      let child = this.messagesFromService[key];
      this.messages.unshift(
        {
          text: child.messageText,
          dateFormat:'/dd.MM.yyyy HH:mm:ss',
          date: new Date(child.postDate),
          reply: this.isMyMessage(child.messageOwner.userId),
          type: 'text',
          user: {
            name: child.messageOwner.userName + " " + child.messageOwner.userSurname,
            avatar: '',
          },
        }
      );
      console.log(child.postDate);
      }
  }
  
  sendMessage(event){
  let message = new MessageWriteModel(event.message,this.currentUser.userId,this.messageRoomId);
  this.messageService.executeSendMessage(message).subscribe(
    response=>this.handleSuccessfulResponseSendMessage(response, event),
    error=> this.handleErrorResponseSendMessage(error)
  
  );
  }
  
  handleSuccessfulResponseSendMessage(response, event){
    this.messages.push(
      {
        text: event.message,
        dateFormat:'/dd.MM.yyyy HH:mm:ss',
        date: new Date(),
        reply: true,
        type: 'text',
        user: {
          name: this.currentUser.userName  + " " + this.currentUser.userSurname,
          avatar: '',
        },
      }
  
    );
  }
  handleErrorResponseSendMessage(error){
    
  }  
  
  
  hasPastMessage(): boolean{
    if(this.numberOfPages>this.page) return true;
    else return false;
  }
  
  loadPastMessage(){
    let pastMessage: MessageReadModel;
    this.messageService.executeGetMessageByRoomId(this.messageRoomId,this.pageSize, this.page).subscribe(
      response=>{
        this.handleSuccessfulResponsePastMessage(response);
      }
    );
  }
  
  
  handleSuccessfulResponsePastMessage(response){
    let pastMessage: MessageReadModel = response;
    for(let key in pastMessage) {
      let child = pastMessage[key];
      this.messages.unshift(
        {
          text: child.messageText,
          dateFormat:'/dd.MM.yyyy HH:mm:ss',
          date: child.postDate,
          reply: this.isMyMessage(child.messageOwner.userId),
          type: 'text',
          user: {
            name: child.messageOwner.userName +  " " + child.messageOwner.userSurname,
            avatar: '',
          },
        }
      );
      }
      this.page++;
  }
}
