import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { ChosenTermDTO } from 'app/objModel/visit_system/chosenTermDTO.model';
import { currentDateAndUserDTO } from 'app/objModel/visit_system/currentDateAndUserDTO.model';
import { UserServiceTypeReadModel } from 'app/objModel/visit_system/visit_system_userServiceType/userServiceTypeReadModel.model';
import { UserVisitWriteModel } from 'app/objModel/visit_system/visit_system_userVisit/userVisitWriteModel.model';
import { WorkHourListOfAvailableHour } from 'app/objModel/visit_system/visit_system_userWorkHour/workHourListOfAvailableHour.model';
import { UserIdDataService } from 'app/service/user-id-data.service';
import { UserServiceTypeDataService } from 'app/service/visit-system/userServiceType/user-service-type-data.service';
import { UserVisitDataService } from 'app/service/visit-system/userVisit/user-visit-data.service';
import { UserWorkDataService } from 'app/service/visit-system/userWork/user-work-data.service';

@Component({
  selector: 'get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.scss']
})
export class GetAppointmentComponent implements OnInit {
  currentUser: UserReadModel;
  serviceProviderId;
  bookVisitSuccessfull: boolean = false;
  serviceType: UserServiceTypeReadModel;
  date = new Date();
  isReady: boolean = false;
  userServiceTypeisNull: boolean;
  listOfDays: number[];
  listOfService: UserServiceTypeReadModel[];
  filter;
  listOfHours: WorkHourListOfAvailableHour[];
  chosenServiceId: number;
  chosenHour;
  constructor(private userWorkDataService: UserWorkDataService,private router: Router, private userIdService:UserIdDataService, private userServiceTypeDataService:UserServiceTypeDataService,
    private userVisitDataSercice: UserVisitDataService) {
   }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("B????d");
      this.router.navigate(['/login']);
    }
    this.getUserId();
    this.getListOfAvailableDay();
    this.getListOfService(this.serviceProviderId);
  }


  getUserId(){
    this.userIdService.currentIduser.subscribe(
      response => this.serviceProviderId = response
    );
    if(this.serviceProviderId==-1){
      this.router.navigate(['/not-found']);
    }
  }
  
hasWorkHour(day): boolean{
    if(this.listOfDays.includes(day)) return true;
  return false;
}

getListOfAvailableDay(){
  let currentDateAndUser: currentDateAndUserDTO = new currentDateAndUserDTO(this.date, this.serviceProviderId);
  this.userWorkDataService.executeGetListOfAvailableDay(currentDateAndUser).subscribe(
    response => {
        this.listOfDays = response;
        this.filter = date => this.hasWorkHour(date.getDate());
        this.isReady = true;
    }
    
  );
}

handleDateChange($event){
  this.bookVisitSuccessfull = false;
  this.getAvailableHours();
}


getAvailableHours(){
  let currentDateAndUser: currentDateAndUserDTO = new currentDateAndUserDTO(this.date, this.serviceProviderId);
  this.userWorkDataService.executeGetUserAvailableTerms(currentDateAndUser).subscribe(
    response => {
        this.listOfHours = response;
    }
  );
}


handleSelectChange(value){
  this.bookVisitSuccessfull = false;
  this.chosenServiceId = value;
}

getAvailableUserServiceType(chosenHour){
  this.userServiceTypeisNull=false;
  this.chosenHour = chosenHour;
  let chosenTermDTO: ChosenTermDTO = new ChosenTermDTO(this.chosenHour,this.date,this.serviceProviderId);
  this.userServiceTypeDataService.executeGetAvailableUserServiceType(chosenTermDTO).subscribe(
    response => {
      this.serviceType = response
      if(this.serviceType==null) {this.userServiceTypeisNull=true};
    }

  );
}

getListOfService(userId: number){
  this.userServiceTypeDataService.executeGetUserServiceType(userId).subscribe(
    respose=>{
      this.listOfService = respose;
    }
  );
}

bookVisit(){
  let reservation = new UserVisitWriteModel(this.currentUser.userId, this.date, this.chosenServiceId,this.chosenHour);
  console.log(reservation);
  this.userVisitDataSercice.executeBookVisit(reservation).subscribe(
    response =>{
      this.bookVisitSuccessfull = true;
      this.getAvailableHours();

    }
  );
}

// reservation(){
//   console.log(this.chosenServiceId);
//   let reservation = new ReservationHourWriteData(1, this.date, this.chosenServiceId,this.chosenHour);
//   this.visitSystemData.executeMakeReservationService(reservation).subscribe(
//     response =>{
//       this.saved = true;
//       this.getAvailableHours();

//     }
//   );
// }

}
