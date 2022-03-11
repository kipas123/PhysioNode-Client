import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageNotificationDTO } from 'app/objModel/message/messageNotificationDTO.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { MessageDataService } from 'app/service/data/message/message-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-messenger',
  templateUrl: './user-messenger.component.html',
  styleUrls: ['./user-messenger.component.scss']
})
export class UserMessengerComponent implements OnInit {
userMessageNotification: MessageNotificationDTO[];  
messageRoomId;
searchUserFiltr;
searchUserButton;
currentUser: UserReadModel
messageRecipient: UserReadModel;
alertSearchingError: boolean = false;
  constructor(private userDataService: UserDataService, private messageDataService: MessageDataService, private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
  }

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];


  ngOnInit(): void {
      this.getCoachAndPhysiotherapist();  
      this.getUserMessageNotification();
  }

  getCoachAndPhysiotherapist(){
    this.userDataService.executeGetUsersWithModRole().subscribe(
      response => {
        this.messageRecipient = response;
        console.log("halo" +this.messageRecipient);
      }
    );
  }

  getMessageRoom(userId: number){
    let messageRoomId: number;
    
    this.messageDataService.executeGetMessageRoom(userId, this.currentUser.userId).subscribe(
      response => {
          messageRoomId = response;
          if(messageRoomId!=0){
            this.messageRoomId = messageRoomId;
          }
      }
    );

  }
  findUser(){
    this.userDataService.executeGetVerifiedUserByUserNameOrUserSurname(this.searchUserFiltr).subscribe(
      response => {
        this.messageRecipient = response;
        this.searchUserButton = this.searchUserFiltr;
      },
      error => {
        this.alertSearchingError = true;
      }
    );
  }
  closeSearching(){
    this.searchUserButton=null;
    this.getCoachAndPhysiotherapist();
  }

  getUserMessageNotification(){
    this.messageDataService.executeGetUserMessageNotification(this.currentUser.userId).subscribe(
      response => {
        this.userMessageNotification = response;
      }
    );
  }

  openMessageNotification(notificationId, userSenderId){
    this.getMessageRoom(userSenderId);
    this.messageDataService.executeDeleteUserMessageNotification(notificationId).subscribe(
      response => {
        this.getUserMessageNotification();
      }
    );
  }

  onClose(){
    this.alertSearchingError = false;
  }


}
