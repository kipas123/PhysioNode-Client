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
  alertIsOpen: boolean = false;
  constructor(private service: MygroupDataService) { }

  ngOnInit(): void {
    this.mygroup = new Mygroup(-1,"","","");
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
      .subscribe(
        data => {
          this.refreshGroups();
          console.log("Oto data:");
          console.log(data);
          this.alertIsOpen=true;
        }
      );

      
    //console.log(this.mygroup);
    //  this.refreshGroups();

  }

  onClose(){
    this.alertIsOpen=false;
  }

}
