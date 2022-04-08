import { Component, OnInit } from '@angular/core';
import { currentDateAndUserDTO } from 'app/objModel/visit_system/currentDateAndUserDTO.model';
import { UserVisitReadModel } from 'app/objModel/visit_system/visit_system_userVisit/userVisitReadModel.model';
import { UserVisitDataService } from 'app/service/visit-system/userVisit/user-visit-data.service';

@Component({
  selector: 'visit-management',
  templateUrl: './visit-management.component.html',
  styleUrls: ['./visit-management.component.scss']
})
export class VisitManagementComponent implements OnInit {
  alertChangeVisitStatus: boolean = false;
  visitToAccept: UserVisitReadModel[];
  date = new Date();
  visitListForChosenDay: UserVisitReadModel[];
  constructor(private userVisitDataService:UserVisitDataService) { }

  ngOnInit(): void {
    this.getReservationToAccept();
    this.getReservation();

  }

  getReservation(){
    let dateUser = new currentDateAndUserDTO(this.date, 1);
    this.userVisitDataService.executeGetVisit(dateUser).subscribe(
      response => {
        console.log(response);
        this.visitListForChosenDay = response;
      }
    );
  }

  getReservationToAccept(){
    let dateUser = new currentDateAndUserDTO(this.date, 1);
    this.userVisitDataService.executeGetVisitToAccept(dateUser).subscribe(
      response => {
        console.log(response);
        this.visitToAccept = response;
      }
    );

  }

  handleDateChange($event){
    this.getReservation();
  }

  changeVisitStatus(visitId:number, statusId: number){
    this.userVisitDataService.executeChangeVisitStatus(visitId, statusId).subscribe(
      response => {
        this.alertChangeVisitStatus = true;
        this.getReservationToAccept();
        this.getReservation();
      }
    );
  }

  onClose(){
    this.alertChangeVisitStatus = false;
  }
}
