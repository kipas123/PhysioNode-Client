import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';

@Component({
  selector: 'user-ailment-list',
  templateUrl: './user-ailment-list.component.html',
  styleUrls: ['./user-ailment-list.component.scss']
})
export class UserAilmentListComponent implements OnInit {
  ailments: Ailment;

  constructor(private service: AilmentDataService) { }

  ngOnInit(): void {
    this.refreshAilments();
  }

  refreshAilments(){
    this.service.executeGetUserAilmentByIdUser(1).subscribe(
      response => {
        this.ailments = response;
        console.log("Oto moj log");
        console.log(this.ailments);
      }
    )
  }

}
