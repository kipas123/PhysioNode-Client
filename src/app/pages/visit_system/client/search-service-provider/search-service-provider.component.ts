import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'search-service-provider',
  templateUrl: './search-service-provider.component.html',
  styleUrls: ['./search-service-provider.component.scss']
})
export class SearchServiceProviderComponent implements OnInit {
  currentUser: UserReadModel;
  serviceProviderList: UserReadModel;
  constructor(private userDataService: UserDataService, private router: Router, private userIdService:UserIdDataService ) {
   }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    this.getServiceProviderList();
  }

  getServiceProviderList(){
    this.userDataService.executeGetUsersWithModRole().subscribe(
      response => {
          this.serviceProviderList = response;
      }
    );
  }
  goToGetAppointment(userId: number){
    this.userIdService.changeIduser(userId);
    this.router.navigate(['/pages/get-appointment']);
  }

}
