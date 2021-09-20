import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ailment } from 'app/objModel/ailment.model';
import { UserReadModel } from 'app/objModel/userReadModel.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';

@Component({
  selector: 'user-ailment-list',
  templateUrl: './user-ailment-list.component.html',
  styleUrls: ['./user-ailment-list.component.scss']
})
export class UserAilmentListComponent implements OnInit {
  ailments: Ailment;
  currentUser: UserReadModel;
  constructor(private service: AilmentDataService, private router: Router) { 
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

}
