import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { currentDateAndUserDTO } from 'app/objModel/visit_system/currentDateAndUserDTO.model';
import { UserServiceTypeReadModel } from 'app/objModel/visit_system/visit_system_userServiceType/userServiceTypeReadModel.model';
import { UserServiceTypeWriteModel } from 'app/objModel/visit_system/visit_system_userServiceType/userServiceTypeWriteModel.model';
import { UserWorkHourReadModel } from 'app/objModel/visit_system/visit_system_userWorkHour/userWorkHourReadModel.model';
import { UserWorkHourWriteModel } from 'app/objModel/visit_system/visit_system_userWorkHour/userWorkHourWriteModel.model';
import { WorkHourListOfAvailableHour} from 'app/objModel/visit_system/visit_system_userWorkHour/workHourListOfAvailableHour.model';
import { UserServiceTypeDataService } from 'app/service/visit-system/userServiceType/user-service-type-data.service';
import { UserWorkDataService } from 'app/service/visit-system/userWork/user-work-data.service';

@Component({
  selector: 'visit-creator',
  templateUrl: './visit-creator.component.html',
  styleUrls: ['./visit-creator.component.scss']
})
export class VisitCreatorComponent implements OnInit {
 currentUser: UserReadModel;
//form to create service variable
  serviceName: String;
  serviceDuration: number;
//init calendar
date = new Date();
filter = date => date.getDay() !== 0 && date.getDay() !== 6;
//form to create WorkHour
selectedDateFrom: Date;
selectedDateTo : Date;

  workHourListOfAvailableHourFromService : WorkHourListOfAvailableHour[];
  listOfAvailableHour : Date[] = [];

  listOfWorkHour: UserWorkHourReadModel[];
  listOfService: UserServiceTypeReadModel[];
  constructor(private userWorkDataService: UserWorkDataService, private userServiceTypeService: UserServiceTypeDataService,  private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.getListOfService(this.currentUser.userId);
    this.getUserWorkHour(this.date, this.currentUser.userId);
    this.getAvailableListOfHours(this.date, this.currentUser.userId);
  }

  ngOnInit(): void {
    this.getListOfService(this.currentUser.userId);
    this.getUserWorkHour(this.date, this.currentUser.userId);
    this.getAvailableListOfHours(this.date, this.currentUser.userId);
  }

getListOfService(userId: number){
  this.userServiceTypeService.executeGetUserServiceType(userId).subscribe(
    respose=>{
      this.listOfService = respose;
    }
  );
}


getUserWorkHour(date: Date, userId: number){
  let userDate = new currentDateAndUserDTO(this.date, userId);
  this.userWorkDataService.executeGetUserWorkHour(userDate).subscribe(
    response =>{
        this.listOfWorkHour = response;
        console.log(this.listOfWorkHour);
    }
  );
}

getAvailableListOfHours(date: Date, userId: number){
  this.listOfAvailableHour = [];
  let userDate = new currentDateAndUserDTO(this.date, userId);
  this.userWorkDataService.executeGetListOfAvailableHour(userDate).subscribe(
    response =>{
      this.workHourListOfAvailableHourFromService = response;
      console.log(this.workHourListOfAvailableHourFromService);
      this.workHourListOfAvailableHourFromService.forEach(hour=>{
        if(hour.empty){
          console.log(hour.empty);
          let date: Date;
          date = hour.availableHour;
          this.listOfAvailableHour.push(date);
        }
      })
      
    }
  );
}

  handleDateChange($event){
    this.getUserWorkHour(this.date, this.currentUser.userId);
    this.getAvailableListOfHours(this.date, this.currentUser.userId);
    console.log(this.date);
  }

  isPossibleWorkHour(): boolean{
    let isTrue: boolean = false;
    let findBusy: boolean = false;
      this.workHourListOfAvailableHourFromService.forEach(hour=>{
        if(this.selectedDateFrom == hour.availableHour){
          isTrue = true;
        } 
        if(hour.empty==false && isTrue==true){
          findBusy = true} 

        if(this.selectedDateTo == hour.availableHour){
          isTrue = false;
        }
      });

      console.log("Find" + findBusy);

      if(findBusy) {return false;}
      else return true;
  }

  clickAdd(){
    if(this.isPossibleWorkHour()){
        let listOfHour: Date[] = [];
        let newWorkHour: UserWorkHourWriteModel = new UserWorkHourWriteModel(this.selectedDateFrom, this.selectedDateTo, this.currentUser.userId, this.date);
        console.log(newWorkHour._userWorkHourBeginningTime);
        this.userWorkDataService.executeCreateWorkHour(newWorkHour).subscribe(response =>{
           this.getUserWorkHour(this.date, this.currentUser.userId);
           this.getAvailableListOfHours(this.date, this.currentUser.userId);
        });

    }
  }

  addService(){
    let createService:UserServiceTypeWriteModel = new UserServiceTypeWriteModel(this.serviceName, this.serviceDuration, this.currentUser.userId);
    this.userServiceTypeService.executeCreateUserServiceType(createService).subscribe(
      response => {
        this.getListOfService(this.currentUser.userId);
      }
    );

  }

  deleteService(serviceId: number){
    this.userServiceTypeService.executeDeleteServiceById(serviceId).subscribe(
      response => {
        this.getListOfService(this.currentUser.userId);
      }
    );
  }

  deleteWorkHour(workHourId: number){
    this.userWorkDataService.executeDeleteWorkHourByIdWorkHour(workHourId).subscribe(
      response => {
        this.getUserWorkHour(this.date, this.currentUser.userId);
        this.getAvailableListOfHours(this.date, this.currentUser.userId);
      }
    );
  }

}
