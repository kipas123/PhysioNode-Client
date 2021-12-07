import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserVisitReadModel } from 'app/objModel/visit_system/visit_system_userVisit/userVisitReadModel.model';
import { UserVisitDataService } from 'app/service/visit-system/userVisit/user-visit-data.service';

@Component({
  selector: 'visit-history',
  templateUrl: './visit-history.component.html',
  styleUrls: ['./visit-history.component.scss']
})
export class VisitHistoryComponent implements OnInit {
  currentUser: UserReadModel;
  listOfProviderVisit: UserVisitReadModel[];


  constructor(private userVisitDataService: UserVisitDataService, private router:Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
   }
   
   ngOnInit(): void {
     this.getUserVisit();
  }
  



  getUserVisit(){
    this.userVisitDataService.executeGetProviderVisit(this.currentUser.userId).subscribe(
      response => {
         this.listOfProviderVisit = response;
      }
    );
  }
}
