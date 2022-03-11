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
  //pagination
  numberOfPage: number;
  page: number;
  visitProviderPageSize: number = 4;

  currentUser: UserReadModel;
  listOfProviderVisit: UserVisitReadModel[];


  constructor(private userVisitDataService: UserVisitDataService, private router:Router) {
   }
   
   ngOnInit(): void {
    this.page=0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
     this.getUserVisit();
  }
  



  getUserVisit(){
    let countUnverfiedUsers: number;
    this.userVisitDataService.executeCountProviderVisit(this.currentUser.userId).subscribe(
      response=>{
        countUnverfiedUsers= response;
        console.log(countUnverfiedUsers);
        if(countUnverfiedUsers%this.visitProviderPageSize==0){
          this.numberOfPage = ~~(countUnverfiedUsers/this.visitProviderPageSize);
        }else{
          this.numberOfPage = ~~(countUnverfiedUsers/this.visitProviderPageSize)+1;
        }
    });
    this.userVisitDataService.executeGetProviderVisit(this.currentUser.userId, this.page, this.visitProviderPageSize).subscribe(
      response => {
         this.listOfProviderVisit = response;
      }
    );
  }

  incrementButton(){
    if(this.numberOfPage-1>this.page){
      this.page++;
    this.getUserVisit();
    }else console.log("blad");
  }

  decrementButton(){
    if(this.page>0){
      this.page--;
    this.getUserVisit();
  }else console.log("blad");
}

visibilityButtonNext(): boolean{
  if(this.numberOfPage>this.page+1) return true;
  else return false;
}
visibilityButtonPreview(): boolean{
  if(this.page>0) return true;
  else return false;
}
}
