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
user:UserReadModel;
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService,
    private ailmentIdService: AilmentIDDataService, private router: Router) { }

  ngOnInit(): void {
    this.ailmentIdService.currentIdailment.subscribe(
      ailmentId => this.ailmentId = ailmentId
    );
    this.getProfile();
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
  getProfile(){
    this.userService.executeGetUserByIdUser(1).subscribe(
      response => {
        this.user = response;
       // console.log(response.email);
      }
    )
  }
}
