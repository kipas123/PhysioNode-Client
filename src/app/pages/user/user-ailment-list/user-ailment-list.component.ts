import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';

@Component({
  selector: 'user-ailment-list',
  templateUrl: './user-ailment-list.component.html',
  styleUrls: ['./user-ailment-list.component.scss']
})
export class UserAilmentListComponent implements OnInit {
  ailments: AilmentReadModel;
  currentUser: UserReadModel;
  constructor(private service: AilmentDataService, private router: Router,
    private ailmentIdService: AilmentIDDataService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/pages/login']);
    }
  }

  ngOnInit(): void {
    this.refreshAilments();
  }

  refreshAilments(){
    this.service.executeGetUserAilmentByIdUser(this.currentUser.userId).subscribe(
      response => {
        this.ailments = response;
        console.log("Oto moj log");
        console.log(this.ailments);
      }
    )
  }

goToUserAilment(idAilment: number){
  this.ailmentIdService.changeIdailment(idAilment);
  this.router.navigate(["/pages/ailment"]);
}

}
