import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mygroup } from 'app/objModel/mygroup/mygroup.model';
import { MygroupWriteModel } from 'app/objModel/mygroup/mygroupWriteModel.model';
import { UserList } from 'app/objModel/mygroup/mygroup_userList.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';
import { UserDataService } from 'app/service/data/user/user-data.service';
import { MygroupIdDataService } from 'app/service/mygroup-id-data.service';
import { UserIdDataService } from 'app/service/user-id-data.service';
import { catchError } from 'rxjs/operators';

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
  alertSearchUser: boolean = false;
  searchUserFiltr: string;
  searchUserList: UserReadModel = null;
  type: HttpEventType.Response;
  alertAddUser:boolean = false;
  alertRemoveUser: boolean = false;


  constructor(private groupService:MygroupDataService, private mygroupIdService: MygroupIdDataService,
    private userIdService:UserIdDataService,private router: Router, private userService:UserDataService) { }

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
      }
    );

    this.groupService.executeGetAllUsersByMygroupId(this.mygroupId).subscribe(
      response => {
        this.userList = response;
      },
      error => {
        this.userList = null;
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
    console.log(userId);
    this.router.navigate(['/pages/user-management']);
  }

  onClose(){
    this.alertIsOpen=false;
    this.alertSearchUser = false;
    this.alertAddUser = false;
    this.alertRemoveUser = false;
  }

  findUser(){
    this.alertSearchUser = false;
    this.userService.executeGetUserByEmailOrNameOrSurname(this.searchUserFiltr).subscribe(
      response => {
        this.searchUserList = response;
        if(this.searchUserList == null) this.alertSearchUser = true;
      }
    );
  }

  addUserToGroup(userId){

    this.groupService.executeAddUserToGroup(userId, this.mygroupId).subscribe(
      response =>{
        this.alertAddUser = true;
        this.refreshGroupInfo();
      }
    );

  }

  removeUserFromGroup(userId){
    this.groupService.executeRemoveUserFromGroup(userId, this.mygroupId).subscribe(
      response => {
        this.alertRemoveUser = true;
        this.refreshGroupInfo();
      }
    );
  }
  closeSearchUserList(){
    this.searchUserList = null;
    this.alertAddUser = false;
  }

  deleteGroup(group){
    if(confirm("Are you sure to delete ")) {
      this.groupService.executeDeleteGroup(group.idMygroup).subscribe(
        response=>{
          this.router.navigate(['/pages/groupsManagement']);
        }
      );
    }
  }
}
