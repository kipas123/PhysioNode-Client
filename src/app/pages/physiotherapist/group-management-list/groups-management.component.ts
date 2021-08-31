import { Component, OnInit } from '@angular/core';
import { Mygroup } from 'app/objModel/mygroup.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';

@Component({
  selector: 'groups-management',
  templateUrl: './groups-management.component.html',
  styleUrls: ['./groups-management.component.scss']
})
export class GroupsManagementComponent implements OnInit {
mygroups: Mygroup;
  constructor(private service: MygroupDataService) { }

  ngOnInit(): void {
    this.refreshGroups();
  }
  refreshGroups(){
    this.service.executeGetAllGroups().subscribe(
      response => {
        this.mygroups = response;
      }
    )
  }


}
