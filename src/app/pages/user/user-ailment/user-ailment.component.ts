import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';

@Component({
  selector: 'user-ailment',
  templateUrl: './user-ailment.component.html',
  styleUrls: ['./user-ailment.component.scss']
})
export class UserAilmentComponent implements OnInit {
ailment:Ailment
  constructor(private ailmentService:AilmentDataService) { }

  ngOnInit(): void {
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
}
