import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mygroup } from 'app/objModel/mygroup/mygroup.model';
import { MygroupWriteModel } from 'app/objModel/mygroup/mygroupWriteModel.model';
import { UserList } from 'app/objModel/mygroup/mygroup_userList.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';
import { MygroupIdDataService } from 'app/service/mygroup-id-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';

@Component({
  selector: 'group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  mygroupId: number;
  userList:UserList
  group:Mygroup;
  groupServiceObj: MygroupWriteModel = new MygroupWriteModel(null,null,null,null);
  alertIsOpen:boolean = false;
  constructor(private groupService:MygroupDataService, private mygroupIdService: MygroupIdDataService,
    private userIdService:UserIdDataService,private router: Router) { }

  ngOnInit(): void {
    this.getMygroupId();
    this.refreshGroupInfo();
    
  }

  getMygroupId(){
    this.mygroupIdService.currentIdmygroup.subscribe(
      mygroupId => this.mygroupId = mygroupId
    );
  }

  refreshGroupInfo(){
    if(this.mygroupId == -1){
      this.router.navigate(['/pages/not-found']);
      return false;
    }
    this.groupService.executeGetGroupByGroupId(this.mygroupId).subscribe(
      response => {
        this.group = response;
        this.groupServiceObj.idmygroup = this.group.idMygroup;
        this.groupServiceObj.mygroupName=this.group.mygroupName;
        this.groupServiceObj.mygroupDescription=this.group.mygroupDescription;
        this.mygroupIdService.changeIdmygroup(-1);
      }
    );

    this.groupService.executeGetAllUsersByMygroupId(this.mygroupId).subscribe(
      response => {
        this.userList = response;
        this.mygroupIdService.changeIdmygroup(-1);
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

  goToUserManagement(userId: number){
    this.userIdService.changeIduser(userId);
    this.router.navigate(['/pages/user-management']);
  }

  onClose(){
    this.alertIsOpen=false;
  }
}
