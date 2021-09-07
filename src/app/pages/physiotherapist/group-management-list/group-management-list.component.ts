import { Component, OnInit } from '@angular/core';
import { Mygroup } from 'app/objModel/mygroup.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';

@Component({
  selector: 'group-management-list',
  templateUrl: './group-management-list.component.html',
  styleUrls: ['./group-management-list.component.scss']
})
export class GroupManagementListComponent implements OnInit {

  mygroups: Mygroup;
  mygroup: Mygroup;
  constructor(private service: MygroupDataService) { }

  ngOnInit(): void {
    this.mygroup = new Mygroup(-1,"","");
    this.refreshGroups();
  }
  refreshGroups(){
    this.service.executeGetAllGroups().subscribe(
      response => {
        this.mygroups = response;
      }
    )
  }

  createGroup(){
    this.service.executeCreateGroup(this.mygroup)
    .subscribe (
      data => {
        console.log(data)
      }
    )
    console.log(this.mygroup);
    this.refreshGroups();

  }

}
