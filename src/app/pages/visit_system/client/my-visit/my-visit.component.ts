import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { currentDateAndUserDTO } from 'app/objModel/visit_system/currentDateAndUserDTO.model';
import { UserVisitReadModel } from 'app/objModel/visit_system/visit_system_userVisit/userVisitReadModel.model';
import { UserVisitDataService } from 'app/service/visit-system/userVisit/user-visit-data.service';

@Component({
  selector: 'my-visit',
  templateUrl: './my-visit.component.html',
  styleUrls: ['./my-visit.component.scss']
})
export class MyVisitComponent implements OnInit {
  currentUser: UserReadModel;
  currentDate: Date = new Date();
  listOfUpcomingVisit: UserVisitReadModel[];
  listOfVisit: UserVisitReadModel[];


  constructor(private userVisitDataService: UserVisitDataService, private router:Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
   }

  ngOnInit(): void {
    this.getUpcomingVisit();
    this.getVisit();
  }

  getUpcomingVisit(){
    let currentDateAndUser: currentDateAndUserDTO = new currentDateAndUserDTO(this.currentDate, this.currentUser.userId);
    this.userVisitDataService.executeGetUserUpcomingVisit(currentDateAndUser).subscribe(
      response => {
        this.listOfUpcomingVisit = response;
      }
    );
  }

  getVisit(){
    this.userVisitDataService.executeGetUserVisit(this.currentUser.userId).subscribe(
      response => {
        this.listOfVisit = response;
      }
    );
  }
}
