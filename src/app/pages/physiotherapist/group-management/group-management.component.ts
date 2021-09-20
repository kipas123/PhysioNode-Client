import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Mygroup } from 'app/objModel/mygroup.model';
import { MygroupWriteModel } from 'app/objModel/mygroupWriteModel.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';

@Component({
  selector: 'group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  group:Mygroup;
  groupServiceObj: MygroupWriteModel = new MygroupWriteModel(null,null,null,null);
  alertIsOpen:boolean = false;
  constructor(private groupService:MygroupDataService) { }

  ngOnInit(): void {
    this.refreshGroupInfo();
  }

  x: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  refreshGroupInfo(){
    this.groupService.executeGetGroupByGroupId(1).subscribe(
      response => {
        this.group = response;
        this.groupServiceObj.idmygroup = this.group.idMygroup;
        this.groupServiceObj.mygroupName=this.group.mygroupName;
        this.groupServiceObj.mygroupDescription=this.group.mygroupDescription;
      }
    );
  }

  changeGroupInfo(){
    console.log(this.groupServiceObj);
    this.groupService.executechangeGroupInfo(this.groupServiceObj).subscribe(
      data =>{
            this.refreshGroupInfo();
            this.alertIsOpen=true;
      }
    )
  }
  onClose(){
    this.alertIsOpen=false;
  }
}
