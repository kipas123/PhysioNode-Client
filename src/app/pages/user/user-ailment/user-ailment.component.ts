import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { UserReadModel} from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { MessageDataService } from 'app/service/data/message/message-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-ailment',
  templateUrl: './user-ailment.component.html',
  styleUrls: ['./user-ailment.component.scss']
})
export class UserAilmentComponent implements OnInit {
  messengerUserId: number;
  messengerMessageRoomId: number;
  ailmentId: number;
    ailment:AilmentReadModel;
currentUser:UserReadModel;
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService,
    private ailmentIdService: AilmentIDDataService, private router: Router, private messageDataService: MessageDataService) {
     }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.messengerUserId = this.currentUser.userId;
    console.log("Tu jestem" + this.messengerUserId);
    this.ailmentIdService.currentIdailment.subscribe(
      ailmentId => this.ailmentId = ailmentId
    );
    console.log(this.ailmentId);
    this.refreshAilment();
  }


  refreshAilment(){
    if(this.ailmentId==-1){
      this.router.navigate(["/pages/not-found"]);
      return false;
    }
    this.ailmentService.executeGetAilmentByIdAilment(this.ailmentId).subscribe(
      response => {
        this.ailment = response;
         this.getMessageRoom();
        // this.ailmentIdService.changeIdailment(-1);
      }
    );
  }

  getMessageRoom(){
    let messageRoomId: number;
    this.messageDataService.executeGetMessageRoom(this.currentUser.userId, this.ailment.attendingphysician.userId).subscribe(
      response => {
          messageRoomId = response;
          if(messageRoomId!=0){
            this.messengerMessageRoomId = messageRoomId;
          }
      }
    );

  }
}
