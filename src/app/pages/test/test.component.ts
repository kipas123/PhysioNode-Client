import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessageReadModel } from 'app/objModel/message/messageReadModel';
import { MessageWriteModel } from 'app/objModel/message/messageWriteModel';
import { MessageDataService } from 'app/service/data/message/message-data.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
messages: any[] = [];
messagesFromService: MessageReadModel;
messagesFromServicePast: MessageReadModel;
counter: number = 1;
pages: number;
pageSize: number = 2;
records;
  constructor(private http:HttpClient,
    private messageService:MessageDataService) { }

  ngOnInit(): void {

  }

getMessages(){
  this.messageService.executeGetMessage(1,0, 2).subscribe(
    response => {
      this.messagesFromService = response;
      this.createTable();
    }
  );
  this.messageService.executeCountMessage(1).subscribe(
    response => {
      this.records = response;
      if(this.records%this.pageSize==0){
        this.pages = ~~(this.records/this.pageSize);
      }else{
        this.pages = ~~(this.records/this.pageSize)+1;
      }
    }
  );
}



test(){
  this.getMessages();
}

testboola(id: number): boolean{
  if(id%2==0){
    return true;
  }else{
    return false;
  }
}


createTable(){
  let type: number;
  for(let key in this.messagesFromService) {
    console.log("a");
    let child = this.messagesFromService[key];
    this.messages.unshift(
      {
        text: child.messageText,
        date: new Date(),
        reply: this.testboola(child.who),
        type: 'text',
        user: {
          name: 'Gandalf the Grey',
          avatar: 'https://i.gifer.com/no.gif',
        },
      }
    );
    }
}

sendMessage(event){
let message = new MessageWriteModel(event.message,1,1);
this.messageService.executeSendMessage(message).subscribe(
  response=>this.handleSuccessfulResponse(response, event),
  error=> this.handleErrorResponse(error)

);
}

handleSuccessfulResponse(response, event){
  this.messages.push(
    {
      text: event.message,
      date: new Date(),
      reply: this.testboola(this.counter),
      type: 'text',
      user: {
        name: 'Gandalf the Grey',
        avatar: 'https://i.gifer.com/no.gif',
      },
    }

  );
}
handleErrorResponse(error){
  
}  


buttonVisible(): boolean{
  if(this.pages>this.counter) return true;
  else return false;
}

loadPastMessage(){
  let pastMessage: MessageReadModel;
  this.messageService.executeGetMessage(1,this.counter, 2).subscribe(
    response=>{
      this.handleSuccessfulResponsePastMessage(response);
    }
  );
}


handleSuccessfulResponsePastMessage(response){
  let pastMessage: MessageReadModel = response;
  for(let key in pastMessage) {
    console.log("jestes");
    let child = pastMessage[key];
    this.messages.unshift(
      {
        text: child.messageText,
        date: new Date(),
        reply: this.testboola(child.who),
        type: 'text',
        user: {
          name: 'Gandalf the Grey',
          avatar: 'https://i.gifer.com/no.gif',
        },
      }
    );
    }
    this.counter++;
}
}
