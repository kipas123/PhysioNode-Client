import { HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mygroup } from 'app/objModel/mygroup/mygroup.model';
import { MygroupWriteModel } from 'app/objModel/mygroup/mygroupWriteModel.model';
import { UserReadModel } from 'app/objModel/user/userReadModel.model';
import { UserWriteModel } from 'app/objModel/user/userWriteMode.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';
import { MygroupIdDataService } from 'app/service/mygroup-id-data.service';

@Component({
  selector: 'group-management-list',
  templateUrl: './group-management-list.component.html',
  styleUrls: ['./group-management-list.component.scss']
})
export class GroupManagementListComponent implements OnInit {
  currentUser: UserReadModel;
  userWrite:UserWriteModel;
  headers: HttpHeaders;
  mygroups: Mygroup;
  mygroup: MygroupWriteModel;
  alertIsOpen: boolean = false;


  constructor(private service: MygroupDataService, private router: Router,
    private mygroupIdSercive:MygroupIdDataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!this.currentUser){
      console.log("Błąd");
      this.router.navigate(['/pages/login']);
    }
   }

  ngOnInit(): void {
    this.mygroup = new MygroupWriteModel(-1,"","",null);
    this.refreshGroups();
  }
  refreshGroups(){
    this.service.executeGetAllGroupsByUserOwner(this.currentUser.userId).subscribe(
      response => {
        this.mygroups = response;
      }
    )
  }

    createGroup(){
      this.userWrite = new UserWriteModel(this.currentUser.userId,"","","","",null);
      this.mygroup.mygroupOwner = this.userWrite;
      console.log(this.currentUser);
     this.service.executeCreateGroup(this.mygroup)
      .subscribe(
        data => {
          this.refreshGroups();
          console.log("Oto data:");
          console.log(data);
          this.alertIsOpen=true;
        }
      );
  }

  goToGroup(mygroupId: number){
    this.mygroupIdSercive.changeIdmygroup(mygroupId);
    this.router.navigate(["/pages/groupManagement"]);
  }

  onClose(){
    this.alertIsOpen=false;
  }

}
