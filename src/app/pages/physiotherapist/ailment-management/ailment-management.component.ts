import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.model';
import { AilmentDataService } from 'app/service/data/ailment/ailment-data.service';

@Component({
  selector: 'ailment-management',
  templateUrl: './ailment-management.component.html',
  styleUrls: ['./ailment-management.component.scss']
})
export class AilmentManagementComponent implements OnInit {
  ailment:Ailment
  constructor(private ailmentService:AilmentDataService) { }

  ngOnInit(): void {
    this.refreshAilmentInfo();
  }
  refreshAilmentInfo(){
    this.ailmentService.executeGetAilmentByIdAilment(1).subscribe(
      response => {
        this.ailment = response;
        console.log(this.ailment);
      }
    )
  }
}
