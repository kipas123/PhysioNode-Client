import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { AilmentIndication } from 'app/objModel/ailment/ailmentIndication.model';
import { AilmentNote } from 'app/objModel/ailment/ailmentNote.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'ailment-management',
  templateUrl: './ailment-management.component.html',
  styleUrls: ['./ailment-management.component.scss']
})
export class AilmentManagementComponent implements OnInit {
  //Ailment&User id path variale;
  currentUser: UserReadModel;
  messengerUserId: number;
  ailmentId: number;
  userId: number;
  //Obj models
  ailment:AilmentReadModel;
  user: UserReadModel;
  ailmentNote:AilmentNote = new AilmentNote(null,"","",null);;
  ailmentIndication:AilmentIndication = new AilmentIndication(null,"","",null);;
  //Alerts
  alertNoteIsOpen: boolean = false;
  alertIndicationIsOpen: boolean = false;
  alertFilepathIsOpen: boolean = false;
  
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService,
    private ailmentIdService: AilmentIDDataService, private userIdService: UserIdDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.messengerUserId = this.currentUser.userId;
    console.log("To ja: " + this.messengerUserId);
    this.getAilmentAndUserId();
    this.getProfile();
    this.refreshAilmentInfo();
  }

  getAilmentAndUserId(){
    this.ailmentIdService.currentIdailment.subscribe(
      ailmentId => this.ailmentId = ailmentId
    );
    this.userIdService.currentIduser.subscribe(
      userId => this.userId = userId
    );
  }

  refreshAilmentInfo(){
    if(this.ailmentId == -1){
      this.router.navigate(['/pages/not-found']);
      return false;
    }
    this.ailmentService.executeGetAilmentByIdAilment(this.ailmentId).subscribe(
      response => {
        this.ailment = response;
      }
    )
  }

  getProfile(){
    if(this.userId == -1){
      this.router.navigate(['/pages/not-found']);
      return false;
    }
    this.userService.executeGetUserByIdUser(this.userId).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
  }

  createAilmentNote(){
    this.ailmentNote.ailmentId = this.ailment.idailment;
    this.ailmentService.executeCreateAilmentNote(this.ailmentNote).subscribe(
      response =>{
          console.log(this.ailmentNote);
          this.refreshAilmentInfo();
          this.alertNoteIsOpen=true;
      }
    )
  }
  createAilmentIndication(){
    this.ailmentIndication.ailmentId = this.ailment.idailment;
    this.ailmentService.executeCreateAilmentIndication(this.ailmentIndication).subscribe(
      response =>{
          console.log(this.ailmentIndication);
          this.refreshAilmentInfo();
          this.alertIndicationIsOpen=true;
      }
    )
  }

  onClose(){
    this.alertNoteIsOpen=false;
    this.alertIndicationIsOpen=false;
    this.alertFilepathIsOpen=false;
  }
}
