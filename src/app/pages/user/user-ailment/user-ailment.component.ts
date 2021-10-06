import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AilmentReadModel } from 'app/objModel/ailment/ailmentReadModel.model';
import { UserReadModel} from 'app/objModel/user/userReadModel.model';
import { AilmentIDDataService } from 'app/service/ailment-id-data.service';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-ailment',
  templateUrl: './user-ailment.component.html',
  styleUrls: ['./user-ailment.component.scss']
})
export class UserAilmentComponent implements OnInit {
  ailmentId: number;
ailment:AilmentReadModel;
currentUser:UserReadModel;
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService,
    private ailmentIdService: AilmentIDDataService, private router: Router) {
     }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/login']);
    }
    
    this.ailmentIdService.currentIdailment.subscribe(
      ailmentId => this.ailmentId = ailmentId
    );
    this.refreshAilment();
  }


  refreshAilment(){
    if(this.ailmentId==-1){
      this.router.navigate(["/pages/not-found"]);
      return false;
    }
    this.ailmentService.executeGetAilmentByIdAilment(this.ailmentId).subscribe(
      response => {
        this.ailment = response;
        this.ailmentIdService.changeIdailment(-1);
      }
    )
  }
}
