import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { UserReadModel} from 'app/objModel/userReadModel.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';

@Component({
  selector: 'user-ailment',
  templateUrl: './user-ailment.component.html',
  styleUrls: ['./user-ailment.component.scss']
})
export class UserAilmentComponent implements OnInit {
ailment:Ailment;
user:UserReadModel;
  constructor(private ailmentService:AilmentDataService, private userService:UserDataService) { }

  ngOnInit(): void {
    this.getProfile();
    this.refreshAilment();
  }


  refreshAilment(){
    this.ailmentService.executeGetAilmentByIdAilment(1).subscribe(
      response => {
        this.ailment = response;
        console.log(this.ailment);
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
