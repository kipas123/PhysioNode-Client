import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { AilmentIndication } from 'app/objModel/ailmentIndication.model';
import { AilmentNote } from 'app/objModel/ailmentNote.model';
import { User } from 'app/objModel/user.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'ailment-management',
  templateUrl: './ailment-management.component.html',
  styleUrls: ['./ailment-management.component.scss']
})
export class AilmentManagementComponent implements OnInit {
  ailment:Ailment;
  ailmentNote:AilmentNote;
  ailmentIndication:AilmentIndication;
  user: User;
  alertNoteIsOpen: boolean = false;
  alertIndicationIsOpen: boolean = false;
  alertFilepathIsOpen: boolean = false;
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService) { }

  ngOnInit(): void {
    this.ailmentNote = new AilmentNote(null,"","",null);
    this.ailmentIndication = new AilmentIndication(null,"","",null);
    this.getProfile();
    this.refreshAilmentInfo();
  }
  refreshAilmentInfo(){
    this.ailmentService.executeGetAilmentByIdAilment(1).subscribe(
      response => {
        this.ailment = response;
        console.log(this.ailment);
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

  getProfile(){
    this.userService.executeGetUserByIdUser(1).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
  }

  onClose(){
    this.alertNoteIsOpen=false;
    this.alertIndicationIsOpen=false;
    this.alertFilepathIsOpen=false;
  }
}
