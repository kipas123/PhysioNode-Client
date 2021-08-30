import { Component, OnInit } from '@angular/core';
import { Ailment } from 'app/objModel/ailment.mode';
import { AilmentDataService } from 'app/service/data/ailment-data.service';

@Component({
  selector: 'user-treatment',
  templateUrl: './user-treatment.component.html',
  styleUrls: ['./user-treatment.component.scss']
})
export class UserTreatmentComponent implements OnInit {
ailments: Ailment;

  constructor(private service: AilmentDataService) { }

  ngOnInit(): void {
    this.refreshAilments();
  }

  refreshAilments(){
    this.service.executeHelloUserBeanService().subscribe(
      response => {
        this.ailments = response;
        console.log(this.ailments);
      }
    )
  }

}
