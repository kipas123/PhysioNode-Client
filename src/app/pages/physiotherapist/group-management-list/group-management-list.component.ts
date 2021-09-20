import { HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mygroup } from 'app/objModel/mygroup.model';
import { MygroupWriteModel } from 'app/objModel/mygroupWriteModel.model';
import { UserReadModel } from 'app/objModel/userReadModel.model';
import { UserWriteModel } from 'app/objModel/userWriteMode.model';
import { MygroupDataService } from 'app/service/data/mygroup/mygroup-data.service';

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


  constructor(private service: MygroupDataService, private router: Router) {
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
    this.service.executeGetAllGroupsByUserId(this.currentUser.userId).subscribe(
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

      
    //console.log(this.mygroup);
    //  this.refreshGroups();

  }

  onClose(){
    this.alertIsOpen=false;
  }

}
